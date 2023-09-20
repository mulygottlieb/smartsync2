import { JobSearchOccupation as TJobSearchOccupation } from "../api/jobSearchOccupation/JobSearchOccupation";

export const JOBSEARCHOCCUPATION_TITLE_FIELD = "name";

export const JobSearchOccupationTitle = (
  record: TJobSearchOccupation
): string => {
  return record.name?.toString() || String(record.id);
};
