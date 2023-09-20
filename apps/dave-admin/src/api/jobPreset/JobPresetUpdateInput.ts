import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { EmployeeJobPresetUpdateManyWithoutJobPresetsInput } from "./EmployeeJobPresetUpdateManyWithoutJobPresetsInput";
import { EmployeeUpworkJobSearchCriterionUpdateManyWithoutJobPresetsInput } from "./EmployeeUpworkJobSearchCriterionUpdateManyWithoutJobPresetsInput";
import { JobPresetUpworkJobSearchCriterionUpdateManyWithoutJobPresetsInput } from "./JobPresetUpworkJobSearchCriterionUpdateManyWithoutJobPresetsInput";

export type JobPresetUpdateInput = {
  name?: string;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  employeeJobPreset?: EmployeeJobPresetUpdateManyWithoutJobPresetsInput;
  employeeUpworkJobSearchCriterion?: EmployeeUpworkJobSearchCriterionUpdateManyWithoutJobPresetsInput;
  jobPresetUpworkJobSearchCriterion?: JobPresetUpworkJobSearchCriterionUpdateManyWithoutJobPresetsInput;
};
