import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { EmployeeUpworkJobSearchCriterionListRelationFilter } from "../employeeUpworkJobSearchCriterion/EmployeeUpworkJobSearchCriterionListRelationFilter";
import { JobPresetUpworkJobSearchCriterionListRelationFilter } from "../jobPresetUpworkJobSearchCriterion/JobPresetUpworkJobSearchCriterionListRelationFilter";

export type JobSearchOccupationWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  jobSourceOccupationId?: StringNullableFilter;
  jobSource?: StringFilter;
  organization?: OrganizationWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  employeeUpworkJobSearchCriterion?: EmployeeUpworkJobSearchCriterionListRelationFilter;
  jobPresetUpworkJobSearchCriterion?: JobPresetUpworkJobSearchCriterionListRelationFilter;
};
