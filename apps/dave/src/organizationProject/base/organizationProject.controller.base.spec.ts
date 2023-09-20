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
import { OrganizationProjectController } from "../organizationProject.controller";
import { OrganizationProjectService } from "../organizationProject.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  name: "exampleName",
  startDate: new Date(),
  endDate: new Date(),
  billing: "exampleBilling",
  currency: "exampleCurrency",
  publicField: "true",
  owner: "exampleOwner",
  taskListType: "exampleTaskListType",
  code: "exampleCode",
  description: "exampleDescription",
  color: "exampleColor",
  billable: "true",
  billingFlat: "true",
  openSource: "true",
  projectUrl: "exampleProjectUrl",
  openSourceProjectUrl: "exampleOpenSourceProjectUrl",
  budget: 42,
  budgetType: "exampleBudgetType",
  membersCount: 42,
  imageUrl: "exampleImageUrl",
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  name: "exampleName",
  startDate: new Date(),
  endDate: new Date(),
  billing: "exampleBilling",
  currency: "exampleCurrency",
  publicField: "true",
  owner: "exampleOwner",
  taskListType: "exampleTaskListType",
  code: "exampleCode",
  description: "exampleDescription",
  color: "exampleColor",
  billable: "true",
  billingFlat: "true",
  openSource: "true",
  projectUrl: "exampleProjectUrl",
  openSourceProjectUrl: "exampleOpenSourceProjectUrl",
  budget: 42,
  budgetType: "exampleBudgetType",
  membersCount: 42,
  imageUrl: "exampleImageUrl",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "exampleName",
    startDate: new Date(),
    endDate: new Date(),
    billing: "exampleBilling",
    currency: "exampleCurrency",
    publicField: "true",
    owner: "exampleOwner",
    taskListType: "exampleTaskListType",
    code: "exampleCode",
    description: "exampleDescription",
    color: "exampleColor",
    billable: "true",
    billingFlat: "true",
    openSource: "true",
    projectUrl: "exampleProjectUrl",
    openSourceProjectUrl: "exampleOpenSourceProjectUrl",
    budget: 42,
    budgetType: "exampleBudgetType",
    membersCount: 42,
    imageUrl: "exampleImageUrl",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  name: "exampleName",
  startDate: new Date(),
  endDate: new Date(),
  billing: "exampleBilling",
  currency: "exampleCurrency",
  publicField: "true",
  owner: "exampleOwner",
  taskListType: "exampleTaskListType",
  code: "exampleCode",
  description: "exampleDescription",
  color: "exampleColor",
  billable: "true",
  billingFlat: "true",
  openSource: "true",
  projectUrl: "exampleProjectUrl",
  openSourceProjectUrl: "exampleOpenSourceProjectUrl",
  budget: 42,
  budgetType: "exampleBudgetType",
  membersCount: 42,
  imageUrl: "exampleImageUrl",
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

describe("OrganizationProject", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: OrganizationProjectService,
          useValue: service,
        },
      ],
      controllers: [OrganizationProjectController],
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

  test("POST /organizationProjects", async () => {
    await request(app.getHttpServer())
      .post("/organizationProjects")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
        endDate: CREATE_RESULT.endDate.toISOString(),
      });
  });

  test("GET /organizationProjects", async () => {
    await request(app.getHttpServer())
      .get("/organizationProjects")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          startDate: FIND_MANY_RESULT[0].startDate.toISOString(),
          endDate: FIND_MANY_RESULT[0].endDate.toISOString(),
        },
      ]);
  });

  test("GET /organizationProjects/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/organizationProjects"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /organizationProjects/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/organizationProjects"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        startDate: FIND_ONE_RESULT.startDate.toISOString(),
        endDate: FIND_ONE_RESULT.endDate.toISOString(),
      });
  });

  test("POST /organizationProjects existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/organizationProjects")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
        endDate: CREATE_RESULT.endDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/organizationProjects")
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
