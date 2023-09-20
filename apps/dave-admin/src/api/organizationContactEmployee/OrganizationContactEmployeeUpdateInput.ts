import { OrganizationContactWhereUniqueInput } from "../organizationContact/OrganizationContactWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type OrganizationContactEmployeeUpdateInput = {
  organizationContact?: OrganizationContactWhereUniqueInput;
  employee?: EmployeeWhereUniqueInput;
};
