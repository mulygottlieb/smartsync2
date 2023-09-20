import { OrganizationDepartmentWhereUniqueInput } from "../organizationDepartment/OrganizationDepartmentWhereUniqueInput";
import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type CandidateDepartmentWhereInput = {
  organizationDepartment?: OrganizationDepartmentWhereUniqueInput;
  candidate?: CandidateWhereUniqueInput;
  id?: StringFilter;
};
