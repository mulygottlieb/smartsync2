import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { EmployeeUpworkJobSearchCriterionUpdateManyWithoutJobSearchCategoriesInput } from "./EmployeeUpworkJobSearchCriterionUpdateManyWithoutJobSearchCategoriesInput";
import { JobPresetUpworkJobSearchCriterionUpdateManyWithoutJobSearchCategoriesInput } from "./JobPresetUpworkJobSearchCriterionUpdateManyWithoutJobSearchCategoriesInput";

export type JobSearchCategoryUpdateInput = {
  name?: string;
  jobSourceCategoryId?: string | null;
  jobSource?: string;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  employeeUpworkJobSearchCriterion?: EmployeeUpworkJobSearchCriterionUpdateManyWithoutJobSearchCategoriesInput;
  jobPresetUpworkJobSearchCriterion?: JobPresetUpworkJobSearchCriterionUpdateManyWithoutJobSearchCategoriesInput;
};
