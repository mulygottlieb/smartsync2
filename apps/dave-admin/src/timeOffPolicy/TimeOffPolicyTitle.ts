import { TimeOffPolicy as TTimeOffPolicy } from "../api/timeOffPolicy/TimeOffPolicy";

export const TIMEOFFPOLICY_TITLE_FIELD = "name";

export const TimeOffPolicyTitle = (record: TTimeOffPolicy): string => {
  return record.name?.toString() || String(record.id);
};
