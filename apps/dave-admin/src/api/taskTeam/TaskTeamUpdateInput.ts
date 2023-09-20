import { OrganizationTeamWhereUniqueInput } from "../organizationTeam/OrganizationTeamWhereUniqueInput";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type TaskTeamUpdateInput = {
  organizationTeam?: OrganizationTeamWhereUniqueInput;
  task?: TaskWhereUniqueInput;
};
