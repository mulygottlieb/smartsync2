import { OrganizationTeamWhereUniqueInput } from "../organizationTeam/OrganizationTeamWhereUniqueInput";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type OrganizationTeamTasksTaskUpdateInput = {
  organizationTeam?: OrganizationTeamWhereUniqueInput;
  task?: TaskWhereUniqueInput;
};
