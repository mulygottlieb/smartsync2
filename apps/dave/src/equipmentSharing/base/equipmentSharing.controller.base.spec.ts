import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { EquipmentSharingController } from "../equipmentSharing.controller";
import { EquipmentSharingService } from "../equipmentSharing.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  name: "exampleName",
  shareRequestDay: new Date(),
  shareStartDay: new Date(),
  shareEndDay: new Date(),
  status: 42,
  createdBy: "exampleCreatedBy",
  createdByName: "exampleCreatedByName",
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  name: "exampleName",
  shareRequestDay: new Date(),
  shareStartDay: new Date(),
  shareEndDay: new Date(),
  status: 42,
  createdBy: "exampleCreatedBy",
  createdByName: "exampleCreatedByName",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "exampleName",
    shareRequestDay: new Date(),
    shareStartDay: new Date(),
    shareEndDay: new Date(),
    status: 42,
    createdBy: "exampleCreatedBy",
    createdByName: "exampleCreatedByName",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  name: "exampleName",
  shareRequestDay: new Date(),
  shareStartDay: new Date(),
  shareEndDay: new Date(),
  status: 42,
  createdBy: "exampleCreatedBy",
  createdByName: "exampleCreatedByName",
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("EquipmentSharing", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EquipmentSharingService,
          useValue: service,
        },
      ],
      controllers: [EquipmentSharingController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /equipmentSharings", async () => {
    await request(app.getHttpServer())
      .post("/equipmentSharings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        shareRequestDay: CREATE_RESULT.shareRequestDay.toISOString(),
        shareStartDay: CREATE_RESULT.shareStartDay.toISOString(),
        shareEndDay: CREATE_RESULT.shareEndDay.toISOString(),
      });
  });

  test("GET /equipmentSharings", async () => {
    await request(app.getHttpServer())
      .get("/equipmentSharings")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          shareRequestDay: FIND_MANY_RESULT[0].shareRequestDay.toISOString(),
          shareStartDay: FIND_MANY_RESULT[0].shareStartDay.toISOString(),
          shareEndDay: FIND_MANY_RESULT[0].shareEndDay.toISOString(),
        },
      ]);
  });

  test("GET /equipmentSharings/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/equipmentSharings"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /equipmentSharings/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/equipmentSharings"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        shareRequestDay: FIND_ONE_RESULT.shareRequestDay.toISOString(),
        shareStartDay: FIND_ONE_RESULT.shareStartDay.toISOString(),
        shareEndDay: FIND_ONE_RESULT.shareEndDay.toISOString(),
      });
  });

  test("POST /equipmentSharings existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/equipmentSharings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        shareRequestDay: CREATE_RESULT.shareRequestDay.toISOString(),
        shareStartDay: CREATE_RESULT.shareStartDay.toISOString(),
        shareEndDay: CREATE_RESULT.shareEndDay.toISOString(),
      })
      .then(function () {
        agent
          .post("/equipmentSharings")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
