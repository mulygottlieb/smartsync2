import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { CandidateDepartmentCreateNestedManyWithoutOrganizationDepartmentsInput } from "./CandidateDepartmentCreateNestedManyWithoutOrganizationDepartmentsInput";
import { InviteOrganizationDepartmentCreateNestedManyWithoutOrganizationDepartmentsInput } from "./InviteOrganizationDepartmentCreateNestedManyWithoutOrganizationDepartmentsInput";
import { OrganizationDepartmentEmployeeCreateNestedManyWithoutOrganizationDepartmentsInput } from "./OrganizationDepartmentEmployeeCreateNestedManyWithoutOrganizationDepartmentsInput";
import { TagOrganizationDepartmentCreateNestedManyWithoutOrganizationDepartmentsInput } from "./TagOrganizationDepartmentCreateNestedManyWithoutOrganizationDepartmentsInput";

export type OrganizationDepartmentCreateInput = {
  name: string;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  candidateDepartment?: CandidateDepartmentCreateNestedManyWithoutOrganizationDepartmentsInput;
  inviteOrganizationDepartment?: InviteOrganizationDepartmentCreateNestedManyWithoutOrganizationDepartmentsInput;
  organizationDepartmentEmployee?: OrganizationDepartmentEmployeeCreateNestedManyWithoutOrganizationDepartmentsInput;
  tagOrganizationDepartment?: TagOrganizationDepartmentCreateNestedManyWithoutOrganizationDepartmentsInput;
};
