import { OrganizationTeamWhereUniqueInput } from "../organizationTeam/OrganizationTeamWhereUniqueInput";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TaskTeamWhereInput = {
  organizationTeam?: OrganizationTeamWhereUniqueInput;
  task?: TaskWhereUniqueInput;
  id?: StringFilter;
};