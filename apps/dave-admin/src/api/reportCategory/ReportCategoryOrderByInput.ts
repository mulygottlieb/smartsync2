import { SortOrder } from "../../util/SortOrder";

export type ReportCategoryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  iconClass?: SortOrder;
};
