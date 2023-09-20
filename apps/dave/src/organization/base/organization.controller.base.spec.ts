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
import { OrganizationController } from "../organization.controller";
import { OrganizationService } from "../organization.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  activityProofDuration: 42,
  allowDeleteTime: "true",
  allowManualTime: "true",
  allowModifyTime: "true",
  allowScreenshotCapture: "true",
  allowTrackInactivity: "true",
  banner: "exampleBanner",
  bonusPercentage: 42,
  bonusType: "exampleBonusType",
  brandColor: "exampleBrandColor",
  clientFocus: "exampleClientFocus",
  convertAcceptedEstimates: "true",
  createdAt: new Date(),
  currency: "exampleCurrency",
  currencyPosition: "exampleCurrencyPosition",
  dateFormat: "exampleDateFormat",
  daysUntilDue: 42,
  defaultAlignmentType: "exampleDefaultAlignmentType",
  defaultEndTime: "exampleDefaultEndTime",
  defaultInvoiceEstimateTerms: "exampleDefaultInvoiceEstimateTerms",
  defaultStartTime: "exampleDefaultStartTime",
  discountAfterTax: "true",
  fiscalEndDate: new Date(),
  fiscalInformation: "exampleFiscalInformation",
  fiscalStartDate: new Date(),
  futureDateAllowed: "true",
  id: "exampleId",
  imageUrl: "exampleImageUrl",
  inactivityTimeLimit: 42,
  inviteExpiryPeriod: 42,
  invitesAllowed: "true",
  isActive: "true",
  isDefault: "true",
  isRemoveIdleTime: "true",
  minimumProjectSize: "exampleMinimumProjectSize",
  name: "exampleName",
  numberFormat: "exampleNumberFormat",
  officialName: "exampleOfficialName",
  overview: "exampleOverview",
  profileLink: "exampleProfileLink",
  regionCode: "exampleRegionCode",
  registrationDate: new Date(),
  requireClient: "true",
  requireDescription: "true",
  requireProject: "true",
  requireReason: "true",
  requireTask: "true",
  separateInvoiceItemTaxAndDiscount: "true",
  shortDescription: "exampleShortDescription",
  showBonusesPaid: "true",
  showClients: "true",
  showClientsCount: "true",
  showEmployeesCount: "true",
  showIncome: "true",
  showMinimumProjectSize: "true",
  showProfits: "true",
  showProjectsCount: "true",
  showTotalHours: "true",
  startWeekOn: "exampleStartWeekOn",
  taxId: "exampleTaxId",
  timeFormat: 42,
  timeZone: "exampleTimeZone",
  totalEmployees: 42,
  updatedAt: new Date(),
  upworkOrganizationId: "exampleUpworkOrganizationId",
  valueDate: new Date(),
  website: "exampleWebsite",
};
const CREATE_RESULT = {
  activityProofDuration: 42,
  allowDeleteTime: "true",
  allowManualTime: "true",
  allowModifyTime: "true",
  allowScreenshotCapture: "true",
  allowTrackInactivity: "true",
  banner: "exampleBanner",
  bonusPercentage: 42,
  bonusType: "exampleBonusType",
  brandColor: "exampleBrandColor",
  clientFocus: "exampleClientFocus",
  convertAcceptedEstimates: "true",
  createdAt: new Date(),
  currency: "exampleCurrency",
  currencyPosition: "exampleCurrencyPosition",
  dateFormat: "exampleDateFormat",
  daysUntilDue: 42,
  defaultAlignmentType: "exampleDefaultAlignmentType",
  defaultEndTime: "exampleDefaultEndTime",
  defaultInvoiceEstimateTerms: "exampleDefaultInvoiceEstimateTerms",
  defaultStartTime: "exampleDefaultStartTime",
  discountAfterTax: "true",
  fiscalEndDate: new Date(),
  fiscalInformation: "exampleFiscalInformation",
  fiscalStartDate: new Date(),
  futureDateAllowed: "true",
  id: "exampleId",
  imageUrl: "exampleImageUrl",
  inactivityTimeLimit: 42,
  inviteExpiryPeriod: 42,
  invitesAllowed: "true",
  isActive: "true",
  isDefault: "true",
  isRemoveIdleTime: "true",
  minimumProjectSize: "exampleMinimumProjectSize",
  name: "exampleName",
  numberFormat: "exampleNumberFormat",
  officialName: "exampleOfficialName",
  overview: "exampleOverview",
  profileLink: "exampleProfileLink",
  regionCode: "exampleRegionCode",
  registrationDate: new Date(),
  requireClient: "true",
  requireDescription: "true",
  requireProject: "true",
  requireReason: "true",
  requireTask: "true",
  separateInvoiceItemTaxAndDiscount: "true",
  shortDescription: "exampleShortDescription",
  showBonusesPaid: "true",
  showClients: "true",
  showClientsCount: "true",
  showEmployeesCount: "true",
  showIncome: "true",
  showMinimumProjectSize: "true",
  showProfits: "true",
  showProjectsCount: "true",
  showTotalHours: "true",
  startWeekOn: "exampleStartWeekOn",
  taxId: "exampleTaxId",
  timeFormat: 42,
  timeZone: "exampleTimeZone",
  totalEmployees: 42,
  updatedAt: new Date(),
  upworkOrganizationId: "exampleUpworkOrganizationId",
  valueDate: new Date(),
  website: "exampleWebsite",
};
const FIND_MANY_RESULT = [
  {
    activityProofDuration: 42,
    allowDeleteTime: "true",
    allowManualTime: "true",
    allowModifyTime: "true",
    allowScreenshotCapture: "true",
    allowTrackInactivity: "true",
    banner: "exampleBanner",
    bonusPercentage: 42,
    bonusType: "exampleBonusType",
    brandColor: "exampleBrandColor",
    clientFocus: "exampleClientFocus",
    convertAcceptedEstimates: "true",
    createdAt: new Date(),
    currency: "exampleCurrency",
    currencyPosition: "exampleCurrencyPosition",
    dateFormat: "exampleDateFormat",
    daysUntilDue: 42,
    defaultAlignmentType: "exampleDefaultAlignmentType",
    defaultEndTime: "exampleDefaultEndTime",
    defaultInvoiceEstimateTerms: "exampleDefaultInvoiceEstimateTerms",
    defaultStartTime: "exampleDefaultStartTime",
    discountAfterTax: "true",
    fiscalEndDate: new Date(),
    fiscalInformation: "exampleFiscalInformation",
    fiscalStartDate: new Date(),
    futureDateAllowed: "true",
    id: "exampleId",
    imageUrl: "exampleImageUrl",
    inactivityTimeLimit: 42,
    inviteExpiryPeriod: 42,
    invitesAllowed: "true",
    isActive: "true",
    isDefault: "true",
    isRemoveIdleTime: "true",
    minimumProjectSize: "exampleMinimumProjectSize",
    name: "exampleName",
    numberFormat: "exampleNumberFormat",
    officialName: "exampleOfficialName",
    overview: "exampleOverview",
    profileLink: "exampleProfileLink",
    regionCode: "exampleRegionCode",
    registrationDate: new Date(),
    requireClient: "true",
    requireDescription: "true",
    requireProject: "true",
    requireReason: "true",
    requireTask: "true",
    separateInvoiceItemTaxAndDiscount: "true",
    shortDescription: "exampleShortDescription",
    showBonusesPaid: "true",
    showClients: "true",
    showClientsCount: "true",
    showEmployeesCount: "true",
    showIncome: "true",
    showMinimumProjectSize: "true",
    showProfits: "true",
    showProjectsCount: "true",
    showTotalHours: "true",
    startWeekOn: "exampleStartWeekOn",
    taxId: "exampleTaxId",
    timeFormat: 42,
    timeZone: "exampleTimeZone",
    totalEmployees: 42,
    updatedAt: new Date(),
    upworkOrganizationId: "exampleUpworkOrganizationId",
    valueDate: new Date(),
    website: "exampleWebsite",
  },
];
const FIND_ONE_RESULT = {
  activityProofDuration: 42,
  allowDeleteTime: "true",
  allowManualTime: "true",
  allowModifyTime: "true",
  allowScreenshotCapture: "true",
  allowTrackInactivity: "true",
  banner: "exampleBanner",
  bonusPercentage: 42,
  bonusType: "exampleBonusType",
  brandColor: "exampleBrandColor",
  clientFocus: "exampleClientFocus",
  convertAcceptedEstimates: "true",
  createdAt: new Date(),
  currency: "exampleCurrency",
  currencyPosition: "exampleCurrencyPosition",
  dateFormat: "exampleDateFormat",
  daysUntilDue: 42,
  defaultAlignmentType: "exampleDefaultAlignmentType",
  defaultEndTime: "exampleDefaultEndTime",
  defaultInvoiceEstimateTerms: "exampleDefaultInvoiceEstimateTerms",
  defaultStartTime: "exampleDefaultStartTime",
  discountAfterTax: "true",
  fiscalEndDate: new Date(),
  fiscalInformation: "exampleFiscalInformation",
  fiscalStartDate: new Date(),
  futureDateAllowed: "true",
  id: "exampleId",
  imageUrl: "exampleImageUrl",
  inactivityTimeLimit: 42,
  inviteExpiryPeriod: 42,
  invitesAllowed: "true",
  isActive: "true",
  isDefault: "true",
  isRemoveIdleTime: "true",
  minimumProjectSize: "exampleMinimumProjectSize",
  name: "exampleName",
  numberFormat: "exampleNumberFormat",
  officialName: "exampleOfficialName",
  overview: "exampleOverview",
  profileLink: "exampleProfileLink",
  regionCode: "exampleRegionCode",
  registrationDate: new Date(),
  requireClient: "true",
  requireDescription: "true",
  requireProject: "true",
  requireReason: "true",
  requireTask: "true",
  separateInvoiceItemTaxAndDiscount: "true",
  shortDescription: "exampleShortDescription",
  showBonusesPaid: "true",
  showClients: "true",
  showClientsCount: "true",
  showEmployeesCount: "true",
  showIncome: "true",
  showMinimumProjectSize: "true",
  showProfits: "true",
  showProjectsCount: "true",
  showTotalHours: "true",
  startWeekOn: "exampleStartWeekOn",
  taxId: "exampleTaxId",
  timeFormat: 42,
  timeZone: "exampleTimeZone",
  totalEmployees: 42,
  updatedAt: new Date(),
  upworkOrganizationId: "exampleUpworkOrganizationId",
  valueDate: new Date(),
  website: "exampleWebsite",
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

describe("Organization", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: OrganizationService,
          useValue: service,
        },
      ],
      controllers: [OrganizationController],
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

  test("POST /organizations", async () => {
    await request(app.getHttpServer())
      .post("/organizations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        fiscalEndDate: CREATE_RESULT.fiscalEndDate.toISOString(),
        fiscalStartDate: CREATE_RESULT.fiscalStartDate.toISOString(),
        registrationDate: CREATE_RESULT.registrationDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        valueDate: CREATE_RESULT.valueDate.toISOString(),
      });
  });

  test("GET /organizations", async () => {
    await request(app.getHttpServer())
      .get("/organizations")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          fiscalEndDate: FIND_MANY_RESULT[0].fiscalEndDate.toISOString(),
          fiscalStartDate: FIND_MANY_RESULT[0].fiscalStartDate.toISOString(),
          registrationDate: FIND_MANY_RESULT[0].registrationDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          valueDate: FIND_MANY_RESULT[0].valueDate.toISOString(),
        },
      ]);
  });

  test("GET /organizations/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/organizations"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /organizations/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/organizations"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        fiscalEndDate: FIND_ONE_RESULT.fiscalEndDate.toISOString(),
        fiscalStartDate: FIND_ONE_RESULT.fiscalStartDate.toISOString(),
        registrationDate: FIND_ONE_RESULT.registrationDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        valueDate: FIND_ONE_RESULT.valueDate.toISOString(),
      });
  });

  test("POST /organizations existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/organizations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        fiscalEndDate: CREATE_RESULT.fiscalEndDate.toISOString(),
        fiscalStartDate: CREATE_RESULT.fiscalStartDate.toISOString(),
        registrationDate: CREATE_RESULT.registrationDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        valueDate: CREATE_RESULT.valueDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/organizations")
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
