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
import { ExpenseController } from "../expense.controller";
import { ExpenseService } from "../expense.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  amount: 42.424242424,
  typeOfExpense: "exampleTypeOfExpense",
  notes: "exampleNotes",
  currency: "exampleCurrency",
  valueDate: new Date(),
  purpose: "examplePurpose",
  taxType: "exampleTaxType",
  taxLabel: "exampleTaxLabel",
  rateValue: 42.424242424,
  receipt: "exampleReceipt",
  splitExpense: "true",
  reference: "exampleReference",
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  amount: 42.424242424,
  typeOfExpense: "exampleTypeOfExpense",
  notes: "exampleNotes",
  currency: "exampleCurrency",
  valueDate: new Date(),
  purpose: "examplePurpose",
  taxType: "exampleTaxType",
  taxLabel: "exampleTaxLabel",
  rateValue: 42.424242424,
  receipt: "exampleReceipt",
  splitExpense: "true",
  reference: "exampleReference",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    amount: 42.424242424,
    typeOfExpense: "exampleTypeOfExpense",
    notes: "exampleNotes",
    currency: "exampleCurrency",
    valueDate: new Date(),
    purpose: "examplePurpose",
    taxType: "exampleTaxType",
    taxLabel: "exampleTaxLabel",
    rateValue: 42.424242424,
    receipt: "exampleReceipt",
    splitExpense: "true",
    reference: "exampleReference",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  amount: 42.424242424,
  typeOfExpense: "exampleTypeOfExpense",
  notes: "exampleNotes",
  currency: "exampleCurrency",
  valueDate: new Date(),
  purpose: "examplePurpose",
  taxType: "exampleTaxType",
  taxLabel: "exampleTaxLabel",
  rateValue: 42.424242424,
  receipt: "exampleReceipt",
  splitExpense: "true",
  reference: "exampleReference",
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

describe("Expense", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ExpenseService,
          useValue: service,
        },
      ],
      controllers: [ExpenseController],
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

  test("POST /expenses", async () => {
    await request(app.getHttpServer())
      .post("/expenses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        valueDate: CREATE_RESULT.valueDate.toISOString(),
      });
  });

  test("GET /expenses", async () => {
    await request(app.getHttpServer())
      .get("/expenses")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          valueDate: FIND_MANY_RESULT[0].valueDate.toISOString(),
        },
      ]);
  });

  test("GET /expenses/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/expenses"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /expenses/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/expenses"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        valueDate: FIND_ONE_RESULT.valueDate.toISOString(),
      });
  });

  test("POST /expenses existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/expenses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        valueDate: CREATE_RESULT.valueDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/expenses")
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
