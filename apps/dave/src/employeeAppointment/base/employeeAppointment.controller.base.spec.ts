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
import { EmployeeAppointmentController } from "../employeeAppointment.controller";
import { EmployeeAppointmentService } from "../employeeAppointment.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  agenda: "exampleAgenda",
  description: "exampleDescription",
  location: "exampleLocation",
  startDateTime: new Date(),
  endDateTime: new Date(),
  bufferTimeStart: "true",
  bufferTimeEnd: "true",
  bufferTimeInMins: 42,
  breakTimeInMins: 42,
  breakStartTime: new Date(),
  emails: "exampleEmails",
  status: "exampleStatus",
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  agenda: "exampleAgenda",
  description: "exampleDescription",
  location: "exampleLocation",
  startDateTime: new Date(),
  endDateTime: new Date(),
  bufferTimeStart: "true",
  bufferTimeEnd: "true",
  bufferTimeInMins: 42,
  breakTimeInMins: 42,
  breakStartTime: new Date(),
  emails: "exampleEmails",
  status: "exampleStatus",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    agenda: "exampleAgenda",
    description: "exampleDescription",
    location: "exampleLocation",
    startDateTime: new Date(),
    endDateTime: new Date(),
    bufferTimeStart: "true",
    bufferTimeEnd: "true",
    bufferTimeInMins: 42,
    breakTimeInMins: 42,
    breakStartTime: new Date(),
    emails: "exampleEmails",
    status: "exampleStatus",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  agenda: "exampleAgenda",
  description: "exampleDescription",
  location: "exampleLocation",
  startDateTime: new Date(),
  endDateTime: new Date(),
  bufferTimeStart: "true",
  bufferTimeEnd: "true",
  bufferTimeInMins: 42,
  breakTimeInMins: 42,
  breakStartTime: new Date(),
  emails: "exampleEmails",
  status: "exampleStatus",
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

describe("EmployeeAppointment", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EmployeeAppointmentService,
          useValue: service,
        },
      ],
      controllers: [EmployeeAppointmentController],
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

  test("POST /employeeAppointments", async () => {
    await request(app.getHttpServer())
      .post("/employeeAppointments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        startDateTime: CREATE_RESULT.startDateTime.toISOString(),
        endDateTime: CREATE_RESULT.endDateTime.toISOString(),
        breakStartTime: CREATE_RESULT.breakStartTime.toISOString(),
      });
  });

  test("GET /employeeAppointments", async () => {
    await request(app.getHttpServer())
      .get("/employeeAppointments")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          startDateTime: FIND_MANY_RESULT[0].startDateTime.toISOString(),
          endDateTime: FIND_MANY_RESULT[0].endDateTime.toISOString(),
          breakStartTime: FIND_MANY_RESULT[0].breakStartTime.toISOString(),
        },
      ]);
  });

  test("GET /employeeAppointments/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/employeeAppointments"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /employeeAppointments/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/employeeAppointments"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        startDateTime: FIND_ONE_RESULT.startDateTime.toISOString(),
        endDateTime: FIND_ONE_RESULT.endDateTime.toISOString(),
        breakStartTime: FIND_ONE_RESULT.breakStartTime.toISOString(),
      });
  });

  test("POST /employeeAppointments existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/employeeAppointments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        startDateTime: CREATE_RESULT.startDateTime.toISOString(),
        endDateTime: CREATE_RESULT.endDateTime.toISOString(),
        breakStartTime: CREATE_RESULT.breakStartTime.toISOString(),
      })
      .then(function () {
        agent
          .post("/employeeAppointments")
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
