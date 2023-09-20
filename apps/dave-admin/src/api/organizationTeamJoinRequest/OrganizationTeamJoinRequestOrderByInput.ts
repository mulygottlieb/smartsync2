import { SortOrder } from "../../util/SortOrder";

export type OrganizationTeamJoinRequestOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  email?: SortOrder;
  fullName?: SortOrder;
  linkAddress?: SortOrder;
  position?: SortOrder;
  status?: SortOrder;
  code?: SortOrder;
  token?: SortOrder;
  expiredAt?: SortOrder;
  organizationTeamId?: SortOrder;
  userId?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
};
