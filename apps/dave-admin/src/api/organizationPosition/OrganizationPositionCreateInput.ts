import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { CandidateCreateNestedManyWithoutOrganizationPositionsInput } from "./CandidateCreateNestedManyWithoutOrganizationPositionsInput";
import { EmployeeCreateNestedManyWithoutOrganizationPositionsInput } from "./EmployeeCreateNestedManyWithoutOrganizationPositionsInput";
import { TagOrganizationPositionCreateNestedManyWithoutOrganizationPositionsInput } from "./TagOrganizationPositionCreateNestedManyWithoutOrganizationPositionsInput";

export type OrganizationPositionCreateInput = {
  name: string;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  candidate?: CandidateCreateNestedManyWithoutOrganizationPositionsInput;
  employee?: EmployeeCreateNestedManyWithoutOrganizationPositionsInput;
  tagOrganizationPosition?: TagOrganizationPositionCreateNestedManyWithoutOrganizationPositionsInput;
};
