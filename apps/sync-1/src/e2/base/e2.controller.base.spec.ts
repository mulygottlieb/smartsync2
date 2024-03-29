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
import { E2Controller } from "../e2.controller";
import { E2Service } from "../e2.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  fld1: "exampleFld1",
  fld11: "exampleFld11",
  fld2: "exampleFld2",
  fld22: "exampleFld22",
  fld23: "exampleFld23",
  fld3: "exampleFld3",
  fld33: "exampleFld33",
  fld34: "exampleFld34",
  fld4: "exampleFld4",
  fld44: "exampleFld44",
  fld45: "exampleFld45",
  fld46: "exampleFld46",
  id: "exampleId",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  fld1: "exampleFld1",
  fld11: "exampleFld11",
  fld2: "exampleFld2",
  fld22: "exampleFld22",
  fld23: "exampleFld23",
  fld3: "exampleFld3",
  fld33: "exampleFld33",
  fld34: "exampleFld34",
  fld4: "exampleFld4",
  fld44: "exampleFld44",
  fld45: "exampleFld45",
  fld46: "exampleFld46",
  id: "exampleId",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    fld1: "exampleFld1",
    fld11: "exampleFld11",
    fld2: "exampleFld2",
    fld22: "exampleFld22",
    fld23: "exampleFld23",
    fld3: "exampleFld3",
    fld33: "exampleFld33",
    fld34: "exampleFld34",
    fld4: "exampleFld4",
    fld44: "exampleFld44",
    fld45: "exampleFld45",
    fld46: "exampleFld46",
    id: "exampleId",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  fld1: "exampleFld1",
  fld11: "exampleFld11",
  fld2: "exampleFld2",
  fld22: "exampleFld22",
  fld23: "exampleFld23",
  fld3: "exampleFld3",
  fld33: "exampleFld33",
  fld34: "exampleFld34",
  fld4: "exampleFld4",
  fld44: "exampleFld44",
  fld45: "exampleFld45",
  fld46: "exampleFld46",
  id: "exampleId",
  updatedAt: new Date(),
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

describe("E2", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: E2Service,
          useValue: service,
        },
      ],
      controllers: [E2Controller],
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

  test("POST /e2s", async () => {
    await request(app.getHttpServer())
      .post("/e2s")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /e2s", async () => {
    await request(app.getHttpServer())
      .get("/e2s")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /e2s/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/e2s"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /e2s/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/e2s"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /e2s existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/e2s")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/e2s")
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
