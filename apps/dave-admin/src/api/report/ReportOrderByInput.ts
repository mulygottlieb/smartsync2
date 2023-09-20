import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  slug?: SortOrder;
  description?: SortOrder;
  image?: SortOrder;
  iconClass?: SortOrder;
  showInMenu?: SortOrder;
  categoryId?: SortOrder;
};
