import { SortOrder } from "../../util/SortOrder";

export type ImportRecordOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  entityType?: SortOrder;
  sourceId?: SortOrder;
  destinationId?: SortOrder;
  importDate?: SortOrder;
  tenantId?: SortOrder;
};
