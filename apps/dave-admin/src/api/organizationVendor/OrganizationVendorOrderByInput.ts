import { SortOrder } from "../../util/SortOrder";

export type OrganizationVendorOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
  phone?: SortOrder;
  website?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
};
