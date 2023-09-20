import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { EmployeeUpworkJobSearchCriterionCreateNestedManyWithoutJobSearchOccupationsInput } from "./EmployeeUpworkJobSearchCriterionCreateNestedManyWithoutJobSearchOccupationsInput";
import { JobPresetUpworkJobSearchCriterionCreateNestedManyWithoutJobSearchOccupationsInput } from "./JobPresetUpworkJobSearchCriterionCreateNestedManyWithoutJobSearchOccupationsInput";

export type JobSearchOccupationCreateInput = {
  name: string;
  jobSourceOccupationId?: string | null;
  jobSource: string;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  employeeUpworkJobSearchCriterion?: EmployeeUpworkJobSearchCriterionCreateNestedManyWithoutJobSearchOccupationsInput;
  jobPresetUpworkJobSearchCriterion?: JobPresetUpworkJobSearchCriterionCreateNestedManyWithoutJobSearchOccupationsInput;
};
