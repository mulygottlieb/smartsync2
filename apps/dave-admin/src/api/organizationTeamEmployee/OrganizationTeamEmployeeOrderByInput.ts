import { SortOrder } from "../../util/SortOrder";

export type OrganizationTeamEmployeeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  isTrackingEnabled?: SortOrder;
  organizationTeamId?: SortOrder;
  employeeId?: SortOrder;
  roleId?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
};
