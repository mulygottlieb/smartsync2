import { EstimateEmail as TEstimateEmail } from "../api/estimateEmail/EstimateEmail";

export const ESTIMATEEMAIL_TITLE_FIELD = "token";

export const EstimateEmailTitle = (record: TEstimateEmail): string => {
  return record.token?.toString() || String(record.id);
};
