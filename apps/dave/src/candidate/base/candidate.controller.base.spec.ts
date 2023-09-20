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
import { CandidateController } from "../candidate.controller";
import { CandidateService } from "../candidate.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  rating: 42.424242424,
  valueDate: new Date(),
  appliedDate: new Date(),
  hiredDate: new Date(),
  status: "exampleStatus",
  rejectDate: new Date(),
  candidateLevel: "exampleCandidateLevel",
  reWeeklyLimit: 42,
  billRateCurrency: "exampleBillRateCurrency",
  billRateValue: 42,
  payPeriod: "examplePayPeriod",
  cvUrl: "exampleCvUrl",
  isArchived: "true",
  minimumBillingRate: 42,
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  rating: 42.424242424,
  valueDate: new Date(),
  appliedDate: new Date(),
  hiredDate: new Date(),
  status: "exampleStatus",
  rejectDate: new Date(),
  candidateLevel: "exampleCandidateLevel",
  reWeeklyLimit: 42,
  billRateCurrency: "exampleBillRateCurrency",
  billRateValue: 42,
  payPeriod: "examplePayPeriod",
  cvUrl: "exampleCvUrl",
  isArchived: "true",
  minimumBillingRate: 42,
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 42.424242424,
    valueDate: new Date(),
    appliedDate: new Date(),
    hiredDate: new Date(),
    status: "exampleStatus",
    rejectDate: new Date(),
    candidateLevel: "exampleCandidateLevel",
    reWeeklyLimit: 42,
    billRateCurrency: "exampleBillRateCurrency",
    billRateValue: 42,
    payPeriod: "examplePayPeriod",
    cvUrl: "exampleCvUrl",
    isArchived: "true",
    minimumBillingRate: 42,
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  rating: 42.424242424,
  valueDate: new Date(),
  appliedDate: new Date(),
  hiredDate: new Date(),
  status: "exampleStatus",
  rejectDate: new Date(),
  candidateLevel: "exampleCandidateLevel",
  reWeeklyLimit: 42,
  billRateCurrency: "exampleBillRateCurrency",
  billRateValue: 42,
  payPeriod: "examplePayPeriod",
  cvUrl: "exampleCvUrl",
  isArchived: "true",
  minimumBillingRate: 42,
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

describe("Candidate", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CandidateService,
          useValue: service,
        },
      ],
      controllers: [CandidateController],
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

  test("POST /candidates", async () => {
    await request(app.getHttpServer())
      .post("/candidates")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        valueDate: CREATE_RESULT.valueDate.toISOString(),
        appliedDate: CREATE_RESULT.appliedDate.toISOString(),
        hiredDate: CREATE_RESULT.hiredDate.toISOString(),
        rejectDate: CREATE_RESULT.rejectDate.toISOString(),
      });
  });

  test("GET /candidates", async () => {
    await request(app.getHttpServer())
      .get("/candidates")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          valueDate: FIND_MANY_RESULT[0].valueDate.toISOString(),
          appliedDate: FIND_MANY_RESULT[0].appliedDate.toISOString(),
          hiredDate: FIND_MANY_RESULT[0].hiredDate.toISOString(),
          rejectDate: FIND_MANY_RESULT[0].rejectDate.toISOString(),
        },
      ]);
  });

  test("GET /candidates/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/candidates"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /candidates/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/candidates"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        valueDate: FIND_ONE_RESULT.valueDate.toISOString(),
        appliedDate: FIND_ONE_RESULT.appliedDate.toISOString(),
        hiredDate: FIND_ONE_RESULT.hiredDate.toISOString(),
        rejectDate: FIND_ONE_RESULT.rejectDate.toISOString(),
      });
  });

  test("POST /candidates existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/candidates")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        valueDate: CREATE_RESULT.valueDate.toISOString(),
        appliedDate: CREATE_RESULT.appliedDate.toISOString(),
        hiredDate: CREATE_RESULT.hiredDate.toISOString(),
        rejectDate: CREATE_RESULT.rejectDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/candidates")
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
