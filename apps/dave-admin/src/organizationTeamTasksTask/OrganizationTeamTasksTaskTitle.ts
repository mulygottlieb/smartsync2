import { OrganizationTeamTasksTask as TOrganizationTeamTasksTask } from "../api/organizationTeamTasksTask/OrganizationTeamTasksTask";

export const ORGANIZATIONTEAMTASKSTASK_TITLE_FIELD = "id";

export const OrganizationTeamTasksTaskTitle = (
  record: TOrganizationTeamTasksTask
): string => {
  return record.id?.toString() || String(record.id);
};
