import { OrganizationContactWhereUniqueInput } from "../organizationContact/OrganizationContactWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type OrganizationContactEmployeeWhereInput = {
  organizationContact?: OrganizationContactWhereUniqueInput;
  employee?: EmployeeWhereUniqueInput;
  id?: StringFilter;
};
