import { SortOrder } from "../../util/SortOrder";

export type FeatureOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  code?: SortOrder;
  isPaid?: SortOrder;
  description?: SortOrder;
  image?: SortOrder;
  link?: SortOrder;
  status?: SortOrder;
  icon?: SortOrder;
  parentId?: SortOrder;
};
