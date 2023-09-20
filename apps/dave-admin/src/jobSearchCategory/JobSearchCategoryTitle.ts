import { JobSearchCategory as TJobSearchCategory } from "../api/jobSearchCategory/JobSearchCategory";

export const JOBSEARCHCATEGORY_TITLE_FIELD = "name";

export const JobSearchCategoryTitle = (record: TJobSearchCategory): string => {
  return record.name?.toString() || String(record.id);
};
