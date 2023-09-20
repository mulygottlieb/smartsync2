import { OrganizationTeam } from "../organizationTeam/OrganizationTeam";
import { Task } from "../task/Task";

export type TaskTeam = {
  organizationTeam?: OrganizationTeam;
  task?: Task;
  id: string;
};
