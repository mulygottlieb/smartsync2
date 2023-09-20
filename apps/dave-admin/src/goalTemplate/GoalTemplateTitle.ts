import { GoalTemplate as TGoalTemplate } from "../api/goalTemplate/GoalTemplate";

export const GOALTEMPLATE_TITLE_FIELD = "name";

export const GoalTemplateTitle = (record: TGoalTemplate): string => {
  return record.name?.toString() || String(record.id);
};
