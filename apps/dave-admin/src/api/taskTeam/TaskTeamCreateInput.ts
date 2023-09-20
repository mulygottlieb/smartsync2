import { OrganizationTeamWhereUniqueInput } from "../organizationTeam/OrganizationTeamWhereUniqueInput";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type TaskTeamCreateInput = {
  organizationTeam: OrganizationTeamWhereUniqueInput;
  task: TaskWhereUniqueInput;
};
