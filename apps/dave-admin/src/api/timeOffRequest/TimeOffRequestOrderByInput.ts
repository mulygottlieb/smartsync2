import { SortOrder } from "../../util/SortOrder";

export type TimeOffRequestOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  documentUrl?: SortOrder;
  description?: SortOrder;
  start?: SortOrder;
  end?: SortOrder;
  requestDate?: SortOrder;
  status?: SortOrder;
  isHoliday?: SortOrder;
  isArchived?: SortOrder;
  tenantId?: SortOrder;
  organizationId?: SortOrder;
  documentId?: SortOrder;
  policyId?: SortOrder;
};
