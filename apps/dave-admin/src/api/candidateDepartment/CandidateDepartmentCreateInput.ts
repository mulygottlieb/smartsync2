import { OrganizationDepartmentWhereUniqueInput } from "../organizationDepartment/OrganizationDepartmentWhereUniqueInput";
import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";

export type CandidateDepartmentCreateInput = {
  organizationDepartment: OrganizationDepartmentWhereUniqueInput;
  candidate: CandidateWhereUniqueInput;
};
