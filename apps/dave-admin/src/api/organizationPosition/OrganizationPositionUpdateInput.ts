import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { CandidateUpdateManyWithoutOrganizationPositionsInput } from "./CandidateUpdateManyWithoutOrganizationPositionsInput";
import { EmployeeUpdateManyWithoutOrganizationPositionsInput } from "./EmployeeUpdateManyWithoutOrganizationPositionsInput";
import { TagOrganizationPositionUpdateManyWithoutOrganizationPositionsInput } from "./TagOrganizationPositionUpdateManyWithoutOrganizationPositionsInput";

export type OrganizationPositionUpdateInput = {
  name?: string;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  candidate?: CandidateUpdateManyWithoutOrganizationPositionsInput;
  employee?: EmployeeUpdateManyWithoutOrganizationPositionsInput;
  tagOrganizationPosition?: TagOrganizationPositionUpdateManyWithoutOrganizationPositionsInput;
};
