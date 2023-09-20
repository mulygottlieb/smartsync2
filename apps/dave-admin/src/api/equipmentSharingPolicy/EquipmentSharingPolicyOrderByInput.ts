import { SortOrder } from "../../util/SortOrder";

export type EquipmentSharingPolicyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
};
