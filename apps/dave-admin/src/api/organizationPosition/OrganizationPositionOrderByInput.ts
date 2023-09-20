import { SortOrder } from "../../util/SortOrder";

export type OrganizationPositionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
};
