import { SortOrder } from "../../util/SortOrder";

export type EquipmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  typeField?: SortOrder;
  serialNumber?: SortOrder;
  manufacturedYear?: SortOrder;
  initialCost?: SortOrder;
  currency?: SortOrder;
  maxSharePeriod?: SortOrder;
  autoApproveShare?: SortOrder;
  imageId?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
};
