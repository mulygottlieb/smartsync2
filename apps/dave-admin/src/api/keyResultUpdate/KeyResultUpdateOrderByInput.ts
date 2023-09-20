import { SortOrder } from "../../util/SortOrder";

export type KeyResultUpdateOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  update?: SortOrder;
  progress?: SortOrder;
  owner?: SortOrder;
  status?: SortOrder;
  keyResultId?: SortOrder;
  tenantId?: SortOrder;
  organizationId?: SortOrder;
};
