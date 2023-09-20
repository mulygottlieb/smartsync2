import { Tenant } from "../tenant/Tenant";
import { JobPreset } from "../jobPreset/JobPreset";
import { JobSearchCategory } from "../jobSearchCategory/JobSearchCategory";
import { JobSearchOccupation } from "../jobSearchOccupation/JobSearchOccupation";
import { Organization } from "../organization/Organization";

export type JobPresetUpworkJobSearchCriterion = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  keyword: string | null;
  jobType: string | null;
  tenant?: Tenant | null;
  jobPreset?: JobPreset;
  jobSearchCategory?: JobSearchCategory | null;
  jobSearchOccupation?: JobSearchOccupation | null;
  organization?: Organization | null;
};
