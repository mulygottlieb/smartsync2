import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { EmployeeJobPresetCreateNestedManyWithoutJobPresetsInput } from "./EmployeeJobPresetCreateNestedManyWithoutJobPresetsInput";
import { EmployeeUpworkJobSearchCriterionCreateNestedManyWithoutJobPresetsInput } from "./EmployeeUpworkJobSearchCriterionCreateNestedManyWithoutJobPresetsInput";
import { JobPresetUpworkJobSearchCriterionCreateNestedManyWithoutJobPresetsInput } from "./JobPresetUpworkJobSearchCriterionCreateNestedManyWithoutJobPresetsInput";

export type JobPresetCreateInput = {
  name: string;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  employeeJobPreset?: EmployeeJobPresetCreateNestedManyWithoutJobPresetsInput;
  employeeUpworkJobSearchCriterion?: EmployeeUpworkJobSearchCriterionCreateNestedManyWithoutJobPresetsInput;
  jobPresetUpworkJobSearchCriterion?: JobPresetUpworkJobSearchCriterionCreateNestedManyWithoutJobPresetsInput;
};
