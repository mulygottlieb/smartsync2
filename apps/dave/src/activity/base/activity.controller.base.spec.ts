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
import { ActivityController } from "../activity.controller";
import { ActivityService } from "../activity.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  title: "exampleTitle",
  description: "exampleDescription",
  date: new Date(),
  time: new Date(),
  duration: 42,
  typeField: "exampleTypeField",
  source: "exampleSource",
  deletedAt: new Date(),
  recordedAt: new Date(),
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  title: "exampleTitle",
  description: "exampleDescription",
  date: new Date(),
  time: new Date(),
  duration: 42,
  typeField: "exampleTypeField",
  source: "exampleSource",
  deletedAt: new Date(),
  recordedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    title: "exampleTitle",
    description: "exampleDescription",
    date: new Date(),
    time: new Date(),
    duration: 42,
    typeField: "exampleTypeField",
    source: "exampleSource",
    deletedAt: new Date(),
    recordedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  title: "exampleTitle",
  description: "exampleDescription",
  date: new Date(),
  time: new Date(),
  duration: 42,
  typeField: "exampleTypeField",
  source: "exampleSource",
  deletedAt: new Date(),
  recordedAt: new Date(),
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

describe("Activity", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ActivityService,
          useValue: service,
        },
      ],
      controllers: [ActivityController],
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

  test("POST /activities", async () => {
    await request(app.getHttpServer())
      .post("/activities")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        time: CREATE_RESULT.time.toISOString(),
        deletedAt: CREATE_RESULT.deletedAt.toISOString(),
        recordedAt: CREATE_RESULT.recordedAt.toISOString(),
      });
  });

  test("GET /activities", async () => {
    await request(app.getHttpServer())
      .get("/activities")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          date: FIND_MANY_RESULT[0].date.toISOString(),
          time: FIND_MANY_RESULT[0].time.toISOString(),
          deletedAt: FIND_MANY_RESULT[0].deletedAt.toISOString(),
          recordedAt: FIND_MANY_RESULT[0].recordedAt.toISOString(),
        },
      ]);
  });

  test("GET /activities/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/activities"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /activities/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/activities"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        date: FIND_ONE_RESULT.date.toISOString(),
        time: FIND_ONE_RESULT.time.toISOString(),
        deletedAt: FIND_ONE_RESULT.deletedAt.toISOString(),
        recordedAt: FIND_ONE_RESULT.recordedAt.toISOString(),
      });
  });

  test("POST /activities existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/activities")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        time: CREATE_RESULT.time.toISOString(),
        deletedAt: CREATE_RESULT.deletedAt.toISOString(),
        recordedAt: CREATE_RESULT.recordedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/activities")
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
