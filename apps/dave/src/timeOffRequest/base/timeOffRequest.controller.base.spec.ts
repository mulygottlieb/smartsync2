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
import { TimeOffRequestController } from "../timeOffRequest.controller";
import { TimeOffRequestService } from "../timeOffRequest.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  documentUrl: "exampleDocumentUrl",
  description: "exampleDescription",
  start: new Date(),
  end: new Date(),
  requestDate: new Date(),
  status: "exampleStatus",
  isHoliday: "true",
  isArchived: "true",
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  documentUrl: "exampleDocumentUrl",
  description: "exampleDescription",
  start: new Date(),
  end: new Date(),
  requestDate: new Date(),
  status: "exampleStatus",
  isHoliday: "true",
  isArchived: "true",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    documentUrl: "exampleDocumentUrl",
    description: "exampleDescription",
    start: new Date(),
    end: new Date(),
    requestDate: new Date(),
    status: "exampleStatus",
    isHoliday: "true",
    isArchived: "true",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  documentUrl: "exampleDocumentUrl",
  description: "exampleDescription",
  start: new Date(),
  end: new Date(),
  requestDate: new Date(),
  status: "exampleStatus",
  isHoliday: "true",
  isArchived: "true",
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

describe("TimeOffRequest", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TimeOffRequestService,
          useValue: service,
        },
      ],
      controllers: [TimeOffRequestController],
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

  test("POST /timeOffRequests", async () => {
    await request(app.getHttpServer())
      .post("/timeOffRequests")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        start: CREATE_RESULT.start.toISOString(),
        end: CREATE_RESULT.end.toISOString(),
        requestDate: CREATE_RESULT.requestDate.toISOString(),
      });
  });

  test("GET /timeOffRequests", async () => {
    await request(app.getHttpServer())
      .get("/timeOffRequests")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          start: FIND_MANY_RESULT[0].start.toISOString(),
          end: FIND_MANY_RESULT[0].end.toISOString(),
          requestDate: FIND_MANY_RESULT[0].requestDate.toISOString(),
        },
      ]);
  });

  test("GET /timeOffRequests/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/timeOffRequests"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /timeOffRequests/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/timeOffRequests"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        start: FIND_ONE_RESULT.start.toISOString(),
        end: FIND_ONE_RESULT.end.toISOString(),
        requestDate: FIND_ONE_RESULT.requestDate.toISOString(),
      });
  });

  test("POST /timeOffRequests existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/timeOffRequests")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        start: CREATE_RESULT.start.toISOString(),
        end: CREATE_RESULT.end.toISOString(),
        requestDate: CREATE_RESULT.requestDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/timeOffRequests")
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
