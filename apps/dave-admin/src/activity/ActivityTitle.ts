import { Activity as TActivity } from "../api/activity/Activity";

export const ACTIVITY_TITLE_FIELD = "title";

export const ActivityTitle = (record: TActivity): string => {
  return record.title?.toString() || String(record.id);
};
