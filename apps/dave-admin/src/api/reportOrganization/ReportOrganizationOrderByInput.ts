import { SortOrder } from "../../util/SortOrder";

export type ReportOrganizationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  isEnabled?: SortOrder;
  organizationId?: SortOrder;
  reportId?: SortOrder;
  tenantId?: SortOrder;
};
