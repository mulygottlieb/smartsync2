import { OrganizationDepartmentWhereUniqueInput } from "../organizationDepartment/OrganizationDepartmentWhereUniqueInput";
import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";

export type CandidateDepartmentUpdateInput = {
  organizationDepartment?: OrganizationDepartmentWhereUniqueInput;
  candidate?: CandidateWhereUniqueInput;
};
