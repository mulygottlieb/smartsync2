import { TimeOffPolicyEmployee as TTimeOffPolicyEmployee } from "../api/timeOffPolicyEmployee/TimeOffPolicyEmployee";

export const TIMEOFFPOLICYEMPLOYEE_TITLE_FIELD = "id";

export const TimeOffPolicyEmployeeTitle = (
  record: TTimeOffPolicyEmployee
): string => {
  return record.id?.toString() || String(record.id);
};
