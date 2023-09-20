import { SortOrder } from "../../util/SortOrder";

export type TaskTeamOrderByInput = {
  organizationTeamId?: SortOrder;
  taskId?: SortOrder;
  id?: SortOrder;
};
