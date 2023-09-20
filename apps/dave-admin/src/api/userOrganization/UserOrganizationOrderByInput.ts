import { SortOrder } from "../../util/SortOrder";

export type UserOrganizationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  isDefault?: SortOrder;
  isActive?: SortOrder;
  userId?: SortOrder;
  tenantId?: SortOrder;
  organizationId?: SortOrder;
};
