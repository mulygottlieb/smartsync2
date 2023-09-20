import { GoalKpiTemplate as TGoalKpiTemplate } from "../api/goalKpiTemplate/GoalKpiTemplate";

export const GOALKPITEMPLATE_TITLE_FIELD = "name";

export const GoalKpiTemplateTitle = (record: TGoalKpiTemplate): string => {
  return record.name?.toString() || String(record.id);
};
