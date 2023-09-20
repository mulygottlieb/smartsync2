import { SortOrder } from "../../util/SortOrder";

export type TenantSettingOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  value?: SortOrder;
  tenantId?: SortOrder;
};
