import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { CandidateDepartmentUpdateManyWithoutOrganizationDepartmentsInput } from "./CandidateDepartmentUpdateManyWithoutOrganizationDepartmentsInput";
import { InviteOrganizationDepartmentUpdateManyWithoutOrganizationDepartmentsInput } from "./InviteOrganizationDepartmentUpdateManyWithoutOrganizationDepartmentsInput";
import { OrganizationDepartmentEmployeeUpdateManyWithoutOrganizationDepartmentsInput } from "./OrganizationDepartmentEmployeeUpdateManyWithoutOrganizationDepartmentsInput";
import { TagOrganizationDepartmentUpdateManyWithoutOrganizationDepartmentsInput } from "./TagOrganizationDepartmentUpdateManyWithoutOrganizationDepartmentsInput";

export type OrganizationDepartmentUpdateInput = {
  name?: string;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  candidateDepartment?: CandidateDepartmentUpdateManyWithoutOrganizationDepartmentsInput;
  inviteOrganizationDepartment?: InviteOrganizationDepartmentUpdateManyWithoutOrganizationDepartmentsInput;
  organizationDepartmentEmployee?: OrganizationDepartmentEmployeeUpdateManyWithoutOrganizationDepartmentsInput;
  tagOrganizationDepartment?: TagOrganizationDepartmentUpdateManyWithoutOrganizationDepartmentsInput;
};
