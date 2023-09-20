import { SortOrder } from "../../util/SortOrder";

export type EquipmentSharingOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  shareRequestDay?: SortOrder;
  shareStartDay?: SortOrder;
  shareEndDay?: SortOrder;
  status?: SortOrder;
  createdBy?: SortOrder;
  createdByName?: SortOrder;
  equipmentSharingPolicyId?: SortOrder;
  equipmentId?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
};
