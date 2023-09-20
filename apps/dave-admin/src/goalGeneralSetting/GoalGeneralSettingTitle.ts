import { GoalGeneralSetting as TGoalGeneralSetting } from "../api/goalGeneralSetting/GoalGeneralSetting";

export const GOALGENERALSETTING_TITLE_FIELD = "canOwnObjectives";

export const GoalGeneralSettingTitle = (
  record: TGoalGeneralSetting
): string => {
  return record.canOwnObjectives?.toString() || String(record.id);
};
