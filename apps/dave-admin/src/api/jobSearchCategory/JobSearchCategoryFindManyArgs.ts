import { JobSearchCategoryWhereInput } from "./JobSearchCategoryWhereInput";
import { JobSearchCategoryOrderByInput } from "./JobSearchCategoryOrderByInput";

export type JobSearchCategoryFindManyArgs = {
  where?: JobSearchCategoryWhereInput;
  orderBy?: Array<JobSearchCategoryOrderByInput>;
  skip?: number;
  take?: number;
};
