import { JobPresetUpworkJobSearchCriterion as TJobPresetUpworkJobSearchCriterion } from "../api/jobPresetUpworkJobSearchCriterion/JobPresetUpworkJobSearchCriterion";

export const JOBPRESETUPWORKJOBSEARCHCRITERION_TITLE_FIELD = "keyword";

export const JobPresetUpworkJobSearchCriterionTitle = (
  record: TJobPresetUpworkJobSearchCriterion
): string => {
  return record.keyword?.toString() || String(record.id);
};
