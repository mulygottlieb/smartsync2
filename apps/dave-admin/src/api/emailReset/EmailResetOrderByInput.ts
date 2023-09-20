import { SortOrder } from "../../util/SortOrder";

export type EmailResetOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  email?: SortOrder;
  oldEmail?: SortOrder;
  code?: SortOrder;
  token?: SortOrder;
  expiredAt?: SortOrder;
  tenantId?: SortOrder;
  userId?: SortOrder;
};
