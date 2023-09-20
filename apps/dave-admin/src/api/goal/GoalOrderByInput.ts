import { SortOrder } from "../../util/SortOrder";

export type GoalOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  deadline?: SortOrder;
  level?: SortOrder;
  progress?: SortOrder;
  ownerEmployeeId?: SortOrder;
  alignedKeyResultId?: SortOrder;
  tenantId?: SortOrder;
  ownerTeamId?: SortOrder;
  leadId?: SortOrder;
  organizationId?: SortOrder;
};
