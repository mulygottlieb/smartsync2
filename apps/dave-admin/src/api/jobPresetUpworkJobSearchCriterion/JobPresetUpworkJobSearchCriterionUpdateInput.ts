import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { JobPresetWhereUniqueInput } from "../jobPreset/JobPresetWhereUniqueInput";
import { JobSearchCategoryWhereUniqueInput } from "../jobSearchCategory/JobSearchCategoryWhereUniqueInput";
import { JobSearchOccupationWhereUniqueInput } from "../jobSearchOccupation/JobSearchOccupationWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type JobPresetUpworkJobSearchCriterionUpdateInput = {
  keyword?: string | null;
  jobType?: string | null;
  tenant?: TenantWhereUniqueInput | null;
  jobPreset?: JobPresetWhereUniqueInput;
  jobSearchCategory?: JobSearchCategoryWhereUniqueInput | null;
  jobSearchOccupation?: JobSearchOccupationWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
};
