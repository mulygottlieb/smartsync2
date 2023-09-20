import { JobPresetWhereUniqueInput } from "../jobPreset/JobPresetWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { JobSearchOccupationWhereUniqueInput } from "../jobSearchOccupation/JobSearchOccupationWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { JobSearchCategoryWhereUniqueInput } from "../jobSearchCategory/JobSearchCategoryWhereUniqueInput";

export type EmployeeUpworkJobSearchCriterionUpdateInput = {
  keyword?: string | null;
  jobType?: string | null;
  jobPreset?: JobPresetWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  jobSearchOccupation?: JobSearchOccupationWhereUniqueInput | null;
  employee?: EmployeeWhereUniqueInput;
  jobSearchCategory?: JobSearchCategoryWhereUniqueInput | null;
};
