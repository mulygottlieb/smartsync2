import { OrganizationTeam } from "../organizationTeam/OrganizationTeam";
import { Task } from "../task/Task";

export type OrganizationTeamTasksTask = {
  organizationTeam?: OrganizationTeam;
  task?: Task;
  id: string;
};
