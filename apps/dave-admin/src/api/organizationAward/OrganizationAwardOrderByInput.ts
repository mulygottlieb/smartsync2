import { SortOrder } from "../../util/SortOrder";

export type OrganizationAwardOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  year?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
};
