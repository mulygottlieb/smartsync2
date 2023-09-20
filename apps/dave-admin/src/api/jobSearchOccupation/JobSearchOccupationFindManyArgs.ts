import { JobSearchOccupationWhereInput } from "./JobSearchOccupationWhereInput";
import { JobSearchOccupationOrderByInput } from "./JobSearchOccupationOrderByInput";

export type JobSearchOccupationFindManyArgs = {
  where?: JobSearchOccupationWhereInput;
  orderBy?: Array<JobSearchOccupationOrderByInput>;
  skip?: number;
  take?: number;
};
