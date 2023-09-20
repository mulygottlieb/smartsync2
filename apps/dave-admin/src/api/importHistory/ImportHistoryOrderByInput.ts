import { SortOrder } from "../../util/SortOrder";

export type ImportHistoryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  file?: SortOrder;
  path?: SortOrder;
  size?: SortOrder;
  status?: SortOrder;
  importDate?: SortOrder;
  tenantId?: SortOrder;
};
