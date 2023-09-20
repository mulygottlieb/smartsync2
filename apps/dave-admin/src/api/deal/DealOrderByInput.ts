import { SortOrder } from "../../util/SortOrder";

export type DealOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  probability?: SortOrder;
  clientId?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
  createdByUserId?: SortOrder;
  stageId?: SortOrder;
};
