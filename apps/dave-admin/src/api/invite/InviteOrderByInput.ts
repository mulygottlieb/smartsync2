import { SortOrder } from "../../util/SortOrder";

export type InviteOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  token?: SortOrder;
  email?: SortOrder;
  status?: SortOrder;
  expireDate?: SortOrder;
  actionDate?: SortOrder;
  code?: SortOrder;
  fullName?: SortOrder;
  invitedById?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
  roleId?: SortOrder;
  userId?: SortOrder;
};
