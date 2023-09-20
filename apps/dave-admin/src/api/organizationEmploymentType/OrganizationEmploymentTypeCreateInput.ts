import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { CandidateEmploymentTypeCreateNestedManyWithoutOrganizationEmploymentTypesInput } from "./CandidateEmploymentTypeCreateNestedManyWithoutOrganizationEmploymentTypesInput";
import { OrganizationEmploymentTypeEmployeeCreateNestedManyWithoutOrganizationEmploymentTypesInput } from "./OrganizationEmploymentTypeEmployeeCreateNestedManyWithoutOrganizationEmploymentTypesInput";
import { TagOrganizationEmploymentTypeCreateNestedManyWithoutOrganizationEmploymentTypesInput } from "./TagOrganizationEmploymentTypeCreateNestedManyWithoutOrganizationEmploymentTypesInput";

export type OrganizationEmploymentTypeCreateInput = {
  name: string;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  candidateEmploymentType?: CandidateEmploymentTypeCreateNestedManyWithoutOrganizationEmploymentTypesInput;
  organizationEmploymentTypeEmployee?: OrganizationEmploymentTypeEmployeeCreateNestedManyWithoutOrganizationEmploymentTypesInput;
  tagOrganizationEmploymentType?: TagOrganizationEmploymentTypeCreateNestedManyWithoutOrganizationEmploymentTypesInput;
};
