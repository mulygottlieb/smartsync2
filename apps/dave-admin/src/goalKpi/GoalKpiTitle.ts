import { GoalKpi as TGoalKpi } from "../api/goalKpi/GoalKpi";

export const GOALKPI_TITLE_FIELD = "name";

export const GoalKpiTitle = (record: TGoalKpi): string => {
  return record.name?.toString() || String(record.id);
};
