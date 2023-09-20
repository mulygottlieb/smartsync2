import { SortOrder } from "../../util/SortOrder";

export type ImageAssetOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  url?: SortOrder;
  width?: SortOrder;
  height?: SortOrder;
  isFeatured?: SortOrder;
  thumb?: SortOrder;
  size?: SortOrder;
  externalProviderId?: SortOrder;
  storageProvider?: SortOrder;
  deletedAt?: SortOrder;
  tenantId?: SortOrder;
  organizationId?: SortOrder;
};
