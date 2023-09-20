import { GoalTimeFrame as TGoalTimeFrame } from "../api/goalTimeFrame/GoalTimeFrame";

export const GOALTIMEFRAME_TITLE_FIELD = "name";

export const GoalTimeFrameTitle = (record: TGoalTimeFrame): string => {
  return record.name?.toString() || String(record.id);
};
