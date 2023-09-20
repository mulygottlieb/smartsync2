import { JobPresetWhereInput } from "./JobPresetWhereInput";
import { JobPresetOrderByInput } from "./JobPresetOrderByInput";

export type JobPresetFindManyArgs = {
  where?: JobPresetWhereInput;
  orderBy?: Array<JobPresetOrderByInput>;
  skip?: number;
  take?: number;
};
