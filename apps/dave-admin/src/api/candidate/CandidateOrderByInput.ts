import { SortOrder } from "../../util/SortOrder";

export type CandidateOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  rating?: SortOrder;
  valueDate?: SortOrder;
  appliedDate?: SortOrder;
  hiredDate?: SortOrder;
  status?: SortOrder;
  rejectDate?: SortOrder;
  candidateLevel?: SortOrder;
  reWeeklyLimit?: SortOrder;
  billRateCurrency?: SortOrder;
  billRateValue?: SortOrder;
  payPeriod?: SortOrder;
  cvUrl?: SortOrder;
  isArchived?: SortOrder;
  minimumBillingRate?: SortOrder;
  organizationId?: SortOrder;
  organizationPositionId?: SortOrder;
  userId?: SortOrder;
  sourceId?: SortOrder;
  tenantId?: SortOrder;
  employeeId?: SortOrder;
  contactId?: SortOrder;
};
