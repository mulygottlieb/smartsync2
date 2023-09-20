import { SortOrder } from "../../util/SortOrder";

export type OrganizationOrderByInput = {
  activityProofDuration?: SortOrder;
  allowDeleteTime?: SortOrder;
  allowManualTime?: SortOrder;
  allowModifyTime?: SortOrder;
  allowScreenshotCapture?: SortOrder;
  allowTrackInactivity?: SortOrder;
  banner?: SortOrder;
  bonusPercentage?: SortOrder;
  bonusType?: SortOrder;
  brandColor?: SortOrder;
  clientFocus?: SortOrder;
  contactOrganizationContactIdTocontactId?: SortOrder;
  convertAcceptedEstimates?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  currencyPosition?: SortOrder;
  dateFormat?: SortOrder;
  daysUntilDue?: SortOrder;
  defaultAlignmentType?: SortOrder;
  defaultEndTime?: SortOrder;
  defaultInvoiceEstimateTerms?: SortOrder;
  defaultStartTime?: SortOrder;
  defaultValueDateType?: SortOrder;
  discountAfterTax?: SortOrder;
  fiscalEndDate?: SortOrder;
  fiscalInformation?: SortOrder;
  fiscalStartDate?: SortOrder;
  futureDateAllowed?: SortOrder;
  id?: SortOrder;
  imageAssetOrganizationImageIdToimageAssetId?: SortOrder;
  imageUrl?: SortOrder;
  inactivityTimeLimit?: SortOrder;
  inviteExpiryPeriod?: SortOrder;
  invitesAllowed?: SortOrder;
  isActive?: SortOrder;
  isDefault?: SortOrder;
  isRemoveIdleTime?: SortOrder;
  minimumProjectSize?: SortOrder;
  name?: SortOrder;
  numberFormat?: SortOrder;
  officialName?: SortOrder;
  overview?: SortOrder;
  profileLink?: SortOrder;
  regionCode?: SortOrder;
  registrationDate?: SortOrder;
  requireClient?: SortOrder;
  requireDescription?: SortOrder;
  requireProject?: SortOrder;
  requireReason?: SortOrder;
  requireTask?: SortOrder;
  separateInvoiceItemTaxAndDiscount?: SortOrder;
  shortDescription?: SortOrder;
  showBonusesPaid?: SortOrder;
  showClients?: SortOrder;
  showClientsCount?: SortOrder;
  showEmployeesCount?: SortOrder;
  showIncome?: SortOrder;
  showMinimumProjectSize?: SortOrder;
  showProfits?: SortOrder;
  showProjectsCount?: SortOrder;
  showTotalHours?: SortOrder;
  startWeekOn?: SortOrder;
  taxId?: SortOrder;
  tenantId?: SortOrder;
  timeFormat?: SortOrder;
  timeZone?: SortOrder;
  totalEmployees?: SortOrder;
  updatedAt?: SortOrder;
  upworkOrganizationId?: SortOrder;
  valueDate?: SortOrder;
  website?: SortOrder;
};