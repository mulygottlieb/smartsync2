import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JobPresetWhereUniqueInput } from "../jobPreset/JobPresetWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { JobSearchOccupationWhereUniqueInput } from "../jobSearchOccupation/JobSearchOccupationWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { JobSearchCategoryWhereUniqueInput } from "../jobSearchCategory/JobSearchCategoryWhereUniqueInput";

export type EmployeeUpworkJobSearchCriterionWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  keyword?: StringNullableFilter;
  jobType?: StringNullableFilter;
  jobPreset?: JobPresetWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  jobSearchOccupation?: JobSearchOccupationWhereUniqueInput;
  employee?: EmployeeWhereUniqueInput;
  jobSearchCategory?: JobSearchCategoryWhereUniqueInput;
};
