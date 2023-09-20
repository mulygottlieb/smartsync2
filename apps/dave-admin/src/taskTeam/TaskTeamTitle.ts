import { TaskTeam as TTaskTeam } from "../api/taskTeam/TaskTeam";

export const TASKTEAM_TITLE_FIELD = "id";

export const TaskTeamTitle = (record: TTaskTeam): string => {
  return record.id?.toString() || String(record.id);
};
