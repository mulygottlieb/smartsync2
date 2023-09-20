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
import { InvoiceController } from "../invoice.controller";
import { InvoiceService } from "../invoice.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  invoiceDate: new Date(),
  invoiceNumber: 42.424242424,
  dueDate: new Date(),
  currency: "exampleCurrency",
  discountValue: 42.424242424,
  paid: "true",
  tax: 42.424242424,
  tax2: 42.424242424,
  terms: "exampleTerms",
  totalValue: 42.424242424,
  status: "exampleStatus",
  isEstimate: "true",
  isAccepted: "true",
  discountType: "exampleDiscountType",
  taxType: "exampleTaxType",
  tax2Type: "exampleTax2Type",
  invoiceType: "exampleInvoiceType",
  sentTo: "exampleSentTo",
  organizationContactId: "exampleOrganizationContactId",
  internalNote: "exampleInternalNote",
  alreadyPaid: 42.424242424,
  amountDue: 42.424242424,
  hasRemainingAmountInvoiced: "true",
  token: "exampleToken",
  isArchived: "true",
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  invoiceDate: new Date(),
  invoiceNumber: 42.424242424,
  dueDate: new Date(),
  currency: "exampleCurrency",
  discountValue: 42.424242424,
  paid: "true",
  tax: 42.424242424,
  tax2: 42.424242424,
  terms: "exampleTerms",
  totalValue: 42.424242424,
  status: "exampleStatus",
  isEstimate: "true",
  isAccepted: "true",
  discountType: "exampleDiscountType",
  taxType: "exampleTaxType",
  tax2Type: "exampleTax2Type",
  invoiceType: "exampleInvoiceType",
  sentTo: "exampleSentTo",
  organizationContactId: "exampleOrganizationContactId",
  internalNote: "exampleInternalNote",
  alreadyPaid: 42.424242424,
  amountDue: 42.424242424,
  hasRemainingAmountInvoiced: "true",
  token: "exampleToken",
  isArchived: "true",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    invoiceDate: new Date(),
    invoiceNumber: 42.424242424,
    dueDate: new Date(),
    currency: "exampleCurrency",
    discountValue: 42.424242424,
    paid: "true",
    tax: 42.424242424,
    tax2: 42.424242424,
    terms: "exampleTerms",
    totalValue: 42.424242424,
    status: "exampleStatus",
    isEstimate: "true",
    isAccepted: "true",
    discountType: "exampleDiscountType",
    taxType: "exampleTaxType",
    tax2Type: "exampleTax2Type",
    invoiceType: "exampleInvoiceType",
    sentTo: "exampleSentTo",
    organizationContactId: "exampleOrganizationContactId",
    internalNote: "exampleInternalNote",
    alreadyPaid: 42.424242424,
    amountDue: 42.424242424,
    hasRemainingAmountInvoiced: "true",
    token: "exampleToken",
    isArchived: "true",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  invoiceDate: new Date(),
  invoiceNumber: 42.424242424,
  dueDate: new Date(),
  currency: "exampleCurrency",
  discountValue: 42.424242424,
  paid: "true",
  tax: 42.424242424,
  tax2: 42.424242424,
  terms: "exampleTerms",
  totalValue: 42.424242424,
  status: "exampleStatus",
  isEstimate: "true",
  isAccepted: "true",
  discountType: "exampleDiscountType",
  taxType: "exampleTaxType",
  tax2Type: "exampleTax2Type",
  invoiceType: "exampleInvoiceType",
  sentTo: "exampleSentTo",
  organizationContactId: "exampleOrganizationContactId",
  internalNote: "exampleInternalNote",
  alreadyPaid: 42.424242424,
  amountDue: 42.424242424,
  hasRemainingAmountInvoiced: "true",
  token: "exampleToken",
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

describe("Invoice", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: InvoiceService,
          useValue: service,
        },
      ],
      controllers: [InvoiceController],
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

  test("POST /invoices", async () => {
    await request(app.getHttpServer())
      .post("/invoices")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        invoiceDate: CREATE_RESULT.invoiceDate.toISOString(),
        dueDate: CREATE_RESULT.dueDate.toISOString(),
      });
  });

  test("GET /invoices", async () => {
    await request(app.getHttpServer())
      .get("/invoices")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          invoiceDate: FIND_MANY_RESULT[0].invoiceDate.toISOString(),
          dueDate: FIND_MANY_RESULT[0].dueDate.toISOString(),
        },
      ]);
  });

  test("GET /invoices/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/invoices"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /invoices/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/invoices"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        invoiceDate: FIND_ONE_RESULT.invoiceDate.toISOString(),
        dueDate: FIND_ONE_RESULT.dueDate.toISOString(),
      });
  });

  test("POST /invoices existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/invoices")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        invoiceDate: CREATE_RESULT.invoiceDate.toISOString(),
        dueDate: CREATE_RESULT.dueDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/invoices")
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
