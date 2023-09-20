import { SortOrder } from "../../util/SortOrder";

export type MerchantOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  code?: SortOrder;
  email?: SortOrder;
  phone?: SortOrder;
  description?: SortOrder;
  active?: SortOrder;
  currency?: SortOrder;
  logoId?: SortOrder;
  tenantId?: SortOrder;
  organizationId?: SortOrder;
  contactId?: SortOrder;
};
