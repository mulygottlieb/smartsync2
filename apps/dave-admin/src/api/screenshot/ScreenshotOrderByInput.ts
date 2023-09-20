import { SortOrder } from "../../util/SortOrder";

export type ScreenshotOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  file?: SortOrder;
  thumb?: SortOrder;
  recordedAt?: SortOrder;
  deletedAt?: SortOrder;
  storageProvider?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
  timeSlotId?: SortOrder;
};
