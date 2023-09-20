import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { EmployeeJobPresetListRelationFilter } from "../employeeJobPreset/EmployeeJobPresetListRelationFilter";
import { EmployeeUpworkJobSearchCriterionListRelationFilter } from "../employeeUpworkJobSearchCriterion/EmployeeUpworkJobSearchCriterionListRelationFilter";
import { JobPresetUpworkJobSearchCriterionListRelationFilter } from "../jobPresetUpworkJobSearchCriterion/JobPresetUpworkJobSearchCriterionListRelationFilter";

export type JobPresetWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  tenant?: TenantWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  employeeJobPreset?: EmployeeJobPresetListRelationFilter;
  employeeUpworkJobSearchCriterion?: EmployeeUpworkJobSearchCriterionListRelationFilter;
  jobPresetUpworkJobSearchCriterion?: JobPresetUpworkJobSearchCriterionListRelationFilter;
};
