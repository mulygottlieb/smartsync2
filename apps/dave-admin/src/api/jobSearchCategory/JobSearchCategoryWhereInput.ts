import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { EmployeeUpworkJobSearchCriterionListRelationFilter } from "../employeeUpworkJobSearchCriterion/EmployeeUpworkJobSearchCriterionListRelationFilter";
import { JobPresetUpworkJobSearchCriterionListRelationFilter } from "../jobPresetUpworkJobSearchCriterion/JobPresetUpworkJobSearchCriterionListRelationFilter";

export type JobSearchCategoryWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  jobSourceCategoryId?: StringNullableFilter;
  jobSource?: StringFilter;
  tenant?: TenantWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  employeeUpworkJobSearchCriterion?: EmployeeUpworkJobSearchCriterionListRelationFilter;
  jobPresetUpworkJobSearchCriterion?: JobPresetUpworkJobSearchCriterionListRelationFilter;
};
