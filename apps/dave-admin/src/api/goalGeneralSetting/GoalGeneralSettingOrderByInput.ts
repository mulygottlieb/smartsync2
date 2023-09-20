import { SortOrder } from "../../util/SortOrder";

export type GoalGeneralSettingOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  maxObjectives?: SortOrder;
  maxKeyResults?: SortOrder;
  employeeCanCreateObjective?: SortOrder;
  canOwnObjectives?: SortOrder;
  canOwnKeyResult?: SortOrder;
  krTypeKPI?: SortOrder;
  krTypeTask?: SortOrder;
  tenantId?: SortOrder;
  organizationId?: SortOrder;
};
