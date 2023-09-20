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
import { OrganizationRecurringExpenseController } from "../organizationRecurringExpense.controller";
import { OrganizationRecurringExpenseService } from "../organizationRecurringExpense.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  startDay: 42,
  startMonth: 42,
  startYear: 42,
  startDate: new Date(),
  endDay: 42,
  endMonth: 42,
  endYear: 42,
  endDate: new Date(),
  categoryName: "exampleCategoryName",
  value: 42.424242424,
  currency: "exampleCurrency",
  splitExpense: "true",
  parentRecurringExpenseId: "exampleParentRecurringExpenseId",
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  startDay: 42,
  startMonth: 42,
  startYear: 42,
  startDate: new Date(),
  endDay: 42,
  endMonth: 42,
  endYear: 42,
  endDate: new Date(),
  categoryName: "exampleCategoryName",
  value: 42.424242424,
  currency: "exampleCurrency",
  splitExpense: "true",
  parentRecurringExpenseId: "exampleParentRecurringExpenseId",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    startDay: 42,
    startMonth: 42,
    startYear: 42,
    startDate: new Date(),
    endDay: 42,
    endMonth: 42,
    endYear: 42,
    endDate: new Date(),
    categoryName: "exampleCategoryName",
    value: 42.424242424,
    currency: "exampleCurrency",
    splitExpense: "true",
    parentRecurringExpenseId: "exampleParentRecurringExpenseId",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  startDay: 42,
  startMonth: 42,
  startYear: 42,
  startDate: new Date(),
  endDay: 42,
  endMonth: 42,
  endYear: 42,
  endDate: new Date(),
  categoryName: "exampleCategoryName",
  value: 42.424242424,
  currency: "exampleCurrency",
  splitExpense: "true",
  parentRecurringExpenseId: "exampleParentRecurringExpenseId",
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

describe("OrganizationRecurringExpense", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: OrganizationRecurringExpenseService,
          useValue: service,
        },
      ],
      controllers: [OrganizationRecurringExpenseController],
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

  test("POST /organizationRecurringExpenses", async () => {
    await request(app.getHttpServer())
      .post("/organizationRecurringExpenses")
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

  test("GET /organizationRecurringExpenses", async () => {
    await request(app.getHttpServer())
      .get("/organizationRecurringExpenses")
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

  test("GET /organizationRecurringExpenses/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/organizationRecurringExpenses"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /organizationRecurringExpenses/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/organizationRecurringExpenses"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        startDate: FIND_ONE_RESULT.startDate.toISOString(),
        endDate: FIND_ONE_RESULT.endDate.toISOString(),
      });
  });

  test("POST /organizationRecurringExpenses existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/organizationRecurringExpenses")
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
          .post("/organizationRecurringExpenses")
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
