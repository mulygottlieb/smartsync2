import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { CandidateEmploymentTypeUpdateManyWithoutOrganizationEmploymentTypesInput } from "./CandidateEmploymentTypeUpdateManyWithoutOrganizationEmploymentTypesInput";
import { OrganizationEmploymentTypeEmployeeUpdateManyWithoutOrganizationEmploymentTypesInput } from "./OrganizationEmploymentTypeEmployeeUpdateManyWithoutOrganizationEmploymentTypesInput";
import { TagOrganizationEmploymentTypeUpdateManyWithoutOrganizationEmploymentTypesInput } from "./TagOrganizationEmploymentTypeUpdateManyWithoutOrganizationEmploymentTypesInput";

export type OrganizationEmploymentTypeUpdateInput = {
  name?: string;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  candidateEmploymentType?: CandidateEmploymentTypeUpdateManyWithoutOrganizationEmploymentTypesInput;
  organizationEmploymentTypeEmployee?: OrganizationEmploymentTypeEmployeeUpdateManyWithoutOrganizationEmploymentTypesInput;
  tagOrganizationEmploymentType?: TagOrganizationEmploymentTypeUpdateManyWithoutOrganizationEmploymentTypesInput;
};
