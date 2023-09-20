import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";
import { EmployeeUpworkJobSearchCriterion } from "../employeeUpworkJobSearchCriterion/EmployeeUpworkJobSearchCriterion";
import { JobPresetUpworkJobSearchCriterion } from "../jobPresetUpworkJobSearchCriterion/JobPresetUpworkJobSearchCriterion";

export type JobSearchCategory = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  jobSourceCategoryId: string | null;
  jobSource: string;
  tenant?: Tenant | null;
  organization?: Organization | null;
  employeeUpworkJobSearchCriterion?: Array<EmployeeUpworkJobSearchCriterion>;
  jobPresetUpworkJobSearchCriterion?: Array<JobPresetUpworkJobSearchCriterion>;
};
