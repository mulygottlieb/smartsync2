import { SortOrder } from "../../util/SortOrder";

export type TenantOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  logo?: SortOrder;
  imageAssetTenantImageIdToimageAssetId?: SortOrder;
};
