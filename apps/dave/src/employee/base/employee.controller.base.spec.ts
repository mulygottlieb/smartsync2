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
import { EmployeeController } from "../employee.controller";
import { EmployeeService } from "../employee.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  endWork: new Date(),
  facebookUrl: "exampleFacebookUrl",
  githubUrl: "exampleGithubUrl",
  gitlabUrl: "exampleGitlabUrl",
  id: "exampleId",
  instagramUrl: "exampleInstagramUrl",
  isActive: "true",
  isAway: "true",
  isJobSearchActive: "true",
  isOnline: "true",
  isTrackingEnabled: "true",
  isTrackingTime: "true",
  isVerified: "true",
  isVetted: "true",
  jobSuccess: 42.424242424,
  acceptDate: new Date(),
  allowScreenshotCapture: "true",
  anonymousBonus: "true",
  averageBonus: 42.424242424,
  averageExpenses: 42.424242424,
  averageIncome: 42.424242424,
  billRateCurrency: "exampleBillRateCurrency",
  billRateValue: 42,
  createdAt: new Date(),
  deletedAt: new Date(),
  description: "exampleDescription",
  employeeLevel: "exampleEmployeeLevel",
  linkedInId: "exampleLinkedInId",
  linkedInUrl: "exampleLinkedInUrl",
  minimumBillingRate: 42,
  offerDate: new Date(),
  payPeriod: "examplePayPeriod",
  profileLink: "exampleProfileLink",
  rejectDate: new Date(),
  reWeeklyLimit: 42,
  shortDescription: "exampleShortDescription",
  showAnonymousBonus: "true",
  showAverageBonus: "true",
  showAverageExpenses: "true",
  showAverageIncome: "true",
  showBillrate: "true",
  showPayperiod: "true",
  showStartWorkOn: "true",
  stackoverflowUrl: "exampleStackoverflowUrl",
  startedWorkOn: new Date(),
  totalJobs: 42.424242424,
  totalWorkHours: 42.424242424,
  twitterUrl: "exampleTwitterUrl",
  updatedAt: new Date(),
  upworkId: "exampleUpworkId",
  upworkUrl: "exampleUpworkUrl",
  valueDate: new Date(),
};
const CREATE_RESULT = {
  endWork: new Date(),
  facebookUrl: "exampleFacebookUrl",
  githubUrl: "exampleGithubUrl",
  gitlabUrl: "exampleGitlabUrl",
  id: "exampleId",
  instagramUrl: "exampleInstagramUrl",
  isActive: "true",
  isAway: "true",
  isJobSearchActive: "true",
  isOnline: "true",
  isTrackingEnabled: "true",
  isTrackingTime: "true",
  isVerified: "true",
  isVetted: "true",
  jobSuccess: 42.424242424,
  acceptDate: new Date(),
  allowScreenshotCapture: "true",
  anonymousBonus: "true",
  averageBonus: 42.424242424,
  averageExpenses: 42.424242424,
  averageIncome: 42.424242424,
  billRateCurrency: "exampleBillRateCurrency",
  billRateValue: 42,
  createdAt: new Date(),
  deletedAt: new Date(),
  description: "exampleDescription",
  employeeLevel: "exampleEmployeeLevel",
  linkedInId: "exampleLinkedInId",
  linkedInUrl: "exampleLinkedInUrl",
  minimumBillingRate: 42,
  offerDate: new Date(),
  payPeriod: "examplePayPeriod",
  profileLink: "exampleProfileLink",
  rejectDate: new Date(),
  reWeeklyLimit: 42,
  shortDescription: "exampleShortDescription",
  showAnonymousBonus: "true",
  showAverageBonus: "true",
  showAverageExpenses: "true",
  showAverageIncome: "true",
  showBillrate: "true",
  showPayperiod: "true",
  showStartWorkOn: "true",
  stackoverflowUrl: "exampleStackoverflowUrl",
  startedWorkOn: new Date(),
  totalJobs: 42.424242424,
  totalWorkHours: 42.424242424,
  twitterUrl: "exampleTwitterUrl",
  updatedAt: new Date(),
  upworkId: "exampleUpworkId",
  upworkUrl: "exampleUpworkUrl",
  valueDate: new Date(),
};
const FIND_MANY_RESULT = [
  {
    endWork: new Date(),
    facebookUrl: "exampleFacebookUrl",
    githubUrl: "exampleGithubUrl",
    gitlabUrl: "exampleGitlabUrl",
    id: "exampleId",
    instagramUrl: "exampleInstagramUrl",
    isActive: "true",
    isAway: "true",
    isJobSearchActive: "true",
    isOnline: "true",
    isTrackingEnabled: "true",
    isTrackingTime: "true",
    isVerified: "true",
    isVetted: "true",
    jobSuccess: 42.424242424,
    acceptDate: new Date(),
    allowScreenshotCapture: "true",
    anonymousBonus: "true",
    averageBonus: 42.424242424,
    averageExpenses: 42.424242424,
    averageIncome: 42.424242424,
    billRateCurrency: "exampleBillRateCurrency",
    billRateValue: 42,
    createdAt: new Date(),
    deletedAt: new Date(),
    description: "exampleDescription",
    employeeLevel: "exampleEmployeeLevel",
    linkedInId: "exampleLinkedInId",
    linkedInUrl: "exampleLinkedInUrl",
    minimumBillingRate: 42,
    offerDate: new Date(),
    payPeriod: "examplePayPeriod",
    profileLink: "exampleProfileLink",
    rejectDate: new Date(),
    reWeeklyLimit: 42,
    shortDescription: "exampleShortDescription",
    showAnonymousBonus: "true",
    showAverageBonus: "true",
    showAverageExpenses: "true",
    showAverageIncome: "true",
    showBillrate: "true",
    showPayperiod: "true",
    showStartWorkOn: "true",
    stackoverflowUrl: "exampleStackoverflowUrl",
    startedWorkOn: new Date(),
    totalJobs: 42.424242424,
    totalWorkHours: 42.424242424,
    twitterUrl: "exampleTwitterUrl",
    updatedAt: new Date(),
    upworkId: "exampleUpworkId",
    upworkUrl: "exampleUpworkUrl",
    valueDate: new Date(),
  },
];
const FIND_ONE_RESULT = {
  endWork: new Date(),
  facebookUrl: "exampleFacebookUrl",
  githubUrl: "exampleGithubUrl",
  gitlabUrl: "exampleGitlabUrl",
  id: "exampleId",
  instagramUrl: "exampleInstagramUrl",
  isActive: "true",
  isAway: "true",
  isJobSearchActive: "true",
  isOnline: "true",
  isTrackingEnabled: "true",
  isTrackingTime: "true",
  isVerified: "true",
  isVetted: "true",
  jobSuccess: 42.424242424,
  acceptDate: new Date(),
  allowScreenshotCapture: "true",
  anonymousBonus: "true",
  averageBonus: 42.424242424,
  averageExpenses: 42.424242424,
  averageIncome: 42.424242424,
  billRateCurrency: "exampleBillRateCurrency",
  billRateValue: 42,
  createdAt: new Date(),
  deletedAt: new Date(),
  description: "exampleDescription",
  employeeLevel: "exampleEmployeeLevel",
  linkedInId: "exampleLinkedInId",
  linkedInUrl: "exampleLinkedInUrl",
  minimumBillingRate: 42,
  offerDate: new Date(),
  payPeriod: "examplePayPeriod",
  profileLink: "exampleProfileLink",
  rejectDate: new Date(),
  reWeeklyLimit: 42,
  shortDescription: "exampleShortDescription",
  showAnonymousBonus: "true",
  showAverageBonus: "true",
  showAverageExpenses: "true",
  showAverageIncome: "true",
  showBillrate: "true",
  showPayperiod: "true",
  showStartWorkOn: "true",
  stackoverflowUrl: "exampleStackoverflowUrl",
  startedWorkOn: new Date(),
  totalJobs: 42.424242424,
  totalWorkHours: 42.424242424,
  twitterUrl: "exampleTwitterUrl",
  updatedAt: new Date(),
  upworkId: "exampleUpworkId",
  upworkUrl: "exampleUpworkUrl",
  valueDate: new Date(),
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

describe("Employee", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EmployeeService,
          useValue: service,
        },
      ],
      controllers: [EmployeeController],
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

  test("POST /employees", async () => {
    await request(app.getHttpServer())
      .post("/employees")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        endWork: CREATE_RESULT.endWork.toISOString(),
        acceptDate: CREATE_RESULT.acceptDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        deletedAt: CREATE_RESULT.deletedAt.toISOString(),
        offerDate: CREATE_RESULT.offerDate.toISOString(),
        rejectDate: CREATE_RESULT.rejectDate.toISOString(),
        startedWorkOn: CREATE_RESULT.startedWorkOn.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        valueDate: CREATE_RESULT.valueDate.toISOString(),
      });
  });

  test("GET /employees", async () => {
    await request(app.getHttpServer())
      .get("/employees")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          endWork: FIND_MANY_RESULT[0].endWork.toISOString(),
          acceptDate: FIND_MANY_RESULT[0].acceptDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          deletedAt: FIND_MANY_RESULT[0].deletedAt.toISOString(),
          offerDate: FIND_MANY_RESULT[0].offerDate.toISOString(),
          rejectDate: FIND_MANY_RESULT[0].rejectDate.toISOString(),
          startedWorkOn: FIND_MANY_RESULT[0].startedWorkOn.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          valueDate: FIND_MANY_RESULT[0].valueDate.toISOString(),
        },
      ]);
  });

  test("GET /employees/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/employees"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /employees/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/employees"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        endWork: FIND_ONE_RESULT.endWork.toISOString(),
        acceptDate: FIND_ONE_RESULT.acceptDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        deletedAt: FIND_ONE_RESULT.deletedAt.toISOString(),
        offerDate: FIND_ONE_RESULT.offerDate.toISOString(),
        rejectDate: FIND_ONE_RESULT.rejectDate.toISOString(),
        startedWorkOn: FIND_ONE_RESULT.startedWorkOn.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        valueDate: FIND_ONE_RESULT.valueDate.toISOString(),
      });
  });

  test("POST /employees existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/employees")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        endWork: CREATE_RESULT.endWork.toISOString(),
        acceptDate: CREATE_RESULT.acceptDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        deletedAt: CREATE_RESULT.deletedAt.toISOString(),
        offerDate: CREATE_RESULT.offerDate.toISOString(),
        rejectDate: CREATE_RESULT.rejectDate.toISOString(),
        startedWorkOn: CREATE_RESULT.startedWorkOn.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        valueDate: CREATE_RESULT.valueDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/employees")
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
