import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { EmployeeUpworkJobSearchCriterionUpdateManyWithoutJobSearchOccupationsInput } from "./EmployeeUpworkJobSearchCriterionUpdateManyWithoutJobSearchOccupationsInput";
import { JobPresetUpworkJobSearchCriterionUpdateManyWithoutJobSearchOccupationsInput } from "./JobPresetUpworkJobSearchCriterionUpdateManyWithoutJobSearchOccupationsInput";

export type JobSearchOccupationUpdateInput = {
  name?: string;
  jobSourceOccupationId?: string | null;
  jobSource?: string;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  employeeUpworkJobSearchCriterion?: EmployeeUpworkJobSearchCriterionUpdateManyWithoutJobSearchOccupationsInput;
  jobPresetUpworkJobSearchCriterion?: JobPresetUpworkJobSearchCriterionUpdateManyWithoutJobSearchOccupationsInput;
};
