import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";
import { EmployeeJobPreset } from "../employeeJobPreset/EmployeeJobPreset";
import { EmployeeUpworkJobSearchCriterion } from "../employeeUpworkJobSearchCriterion/EmployeeUpworkJobSearchCriterion";
import { JobPresetUpworkJobSearchCriterion } from "../jobPresetUpworkJobSearchCriterion/JobPresetUpworkJobSearchCriterion";

export type JobPreset = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  tenant?: Tenant | null;
  organization?: Organization | null;
  employeeJobPreset?: Array<EmployeeJobPreset>;
  employeeUpworkJobSearchCriterion?: Array<EmployeeUpworkJobSearchCriterion>;
  jobPresetUpworkJobSearchCriterion?: Array<JobPresetUpworkJobSearchCriterion>;
};
