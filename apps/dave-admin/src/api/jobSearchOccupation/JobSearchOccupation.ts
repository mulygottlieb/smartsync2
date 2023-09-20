import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";
import { EmployeeUpworkJobSearchCriterion } from "../employeeUpworkJobSearchCriterion/EmployeeUpworkJobSearchCriterion";
import { JobPresetUpworkJobSearchCriterion } from "../jobPresetUpworkJobSearchCriterion/JobPresetUpworkJobSearchCriterion";

export type JobSearchOccupation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  jobSourceOccupationId: string | null;
  jobSource: string;
  organization?: Organization | null;
  tenant?: Tenant | null;
  employeeUpworkJobSearchCriterion?: Array<EmployeeUpworkJobSearchCriterion>;
  jobPresetUpworkJobSearchCriterion?: Array<JobPresetUpworkJobSearchCriterion>;
};
