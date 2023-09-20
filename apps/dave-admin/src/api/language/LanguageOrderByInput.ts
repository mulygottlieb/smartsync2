import { SortOrder } from "../../util/SortOrder";

export type LanguageOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  code?: SortOrder;
  isSystem?: SortOrder;
  description?: SortOrder;
  color?: SortOrder;
};
