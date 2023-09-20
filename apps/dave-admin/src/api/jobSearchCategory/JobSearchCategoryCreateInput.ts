import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { EmployeeUpworkJobSearchCriterionCreateNestedManyWithoutJobSearchCategoriesInput } from "./EmployeeUpworkJobSearchCriterionCreateNestedManyWithoutJobSearchCategoriesInput";
import { JobPresetUpworkJobSearchCriterionCreateNestedManyWithoutJobSearchCategoriesInput } from "./JobPresetUpworkJobSearchCriterionCreateNestedManyWithoutJobSearchCategoriesInput";

export type JobSearchCategoryCreateInput = {
  name: string;
  jobSourceCategoryId?: string | null;
  jobSource: string;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  employeeUpworkJobSearchCriterion?: EmployeeUpworkJobSearchCriterionCreateNestedManyWithoutJobSearchCategoriesInput;
  jobPresetUpworkJobSearchCriterion?: JobPresetUpworkJobSearchCriterionCreateNestedManyWithoutJobSearchCategoriesInput;
};
