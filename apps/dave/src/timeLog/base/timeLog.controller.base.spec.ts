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
import { TimeLogController } from "../timeLog.controller";
import { TimeLogService } from "../timeLog.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  startedAt: new Date(),
  stoppedAt: new Date(),
  logType: "exampleLogType",
  source: "exampleSource",
  description: "exampleDescription",
  reason: "exampleReason",
  isBillable: "true",
  deletedAt: new Date(),
  isRunning: "true",
  version: "exampleVersion",
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  startedAt: new Date(),
  stoppedAt: new Date(),
  logType: "exampleLogType",
  source: "exampleSource",
  description: "exampleDescription",
  reason: "exampleReason",
  isBillable: "true",
  deletedAt: new Date(),
  isRunning: "true",
  version: "exampleVersion",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    startedAt: new Date(),
    stoppedAt: new Date(),
    logType: "exampleLogType",
    source: "exampleSource",
    description: "exampleDescription",
    reason: "exampleReason",
    isBillable: "true",
    deletedAt: new Date(),
    isRunning: "true",
    version: "exampleVersion",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  startedAt: new Date(),
  stoppedAt: new Date(),
  logType: "exampleLogType",
  source: "exampleSource",
  description: "exampleDescription",
  reason: "exampleReason",
  isBillable: "true",
  deletedAt: new Date(),
  isRunning: "true",
  version: "exampleVersion",
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

describe("TimeLog", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TimeLogService,
          useValue: service,
        },
      ],
      controllers: [TimeLogController],
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

  test("POST /timeLogs", async () => {
    await request(app.getHttpServer())
      .post("/timeLogs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        startedAt: CREATE_RESULT.startedAt.toISOString(),
        stoppedAt: CREATE_RESULT.stoppedAt.toISOString(),
        deletedAt: CREATE_RESULT.deletedAt.toISOString(),
      });
  });

  test("GET /timeLogs", async () => {
    await request(app.getHttpServer())
      .get("/timeLogs")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          startedAt: FIND_MANY_RESULT[0].startedAt.toISOString(),
          stoppedAt: FIND_MANY_RESULT[0].stoppedAt.toISOString(),
          deletedAt: FIND_MANY_RESULT[0].deletedAt.toISOString(),
        },
      ]);
  });

  test("GET /timeLogs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/timeLogs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /timeLogs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/timeLogs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        startedAt: FIND_ONE_RESULT.startedAt.toISOString(),
        stoppedAt: FIND_ONE_RESULT.stoppedAt.toISOString(),
        deletedAt: FIND_ONE_RESULT.deletedAt.toISOString(),
      });
  });

  test("POST /timeLogs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/timeLogs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        startedAt: CREATE_RESULT.startedAt.toISOString(),
        stoppedAt: CREATE_RESULT.stoppedAt.toISOString(),
        deletedAt: CREATE_RESULT.deletedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/timeLogs")
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
