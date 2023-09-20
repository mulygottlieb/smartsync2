import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { JobPresetWhereUniqueInput } from "../jobPreset/JobPresetWhereUniqueInput";
import { JobSearchCategoryWhereUniqueInput } from "../jobSearchCategory/JobSearchCategoryWhereUniqueInput";
import { JobSearchOccupationWhereUniqueInput } from "../jobSearchOccupation/JobSearchOccupationWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type JobPresetUpworkJobSearchCriterionWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  keyword?: StringNullableFilter;
  jobType?: StringNullableFilter;
  tenant?: TenantWhereUniqueInput;
  jobPreset?: JobPresetWhereUniqueInput;
  jobSearchCategory?: JobSearchCategoryWhereUniqueInput;
  jobSearchOccupation?: JobSearchOccupationWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
};
