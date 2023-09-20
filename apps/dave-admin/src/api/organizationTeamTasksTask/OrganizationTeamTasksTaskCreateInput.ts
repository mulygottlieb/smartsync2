import { OrganizationTeamWhereUniqueInput } from "../organizationTeam/OrganizationTeamWhereUniqueInput";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type OrganizationTeamTasksTaskCreateInput = {
  organizationTeam: OrganizationTeamWhereUniqueInput;
  task: TaskWhereUniqueInput;
};
