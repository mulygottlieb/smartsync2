import { SortOrder } from "../../util/SortOrder";

export type OrganizationSprintOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  goal?: SortOrder;
  tenantId?: SortOrder;
  length?: SortOrder;
  startDate?: SortOrder;
  endDate?: SortOrder;
  dayStart?: SortOrder;
  isActive?: SortOrder;
  organizationId?: SortOrder;
  projectId?: SortOrder;
};
