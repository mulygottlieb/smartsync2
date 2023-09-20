import { OrganizationContactWhereUniqueInput } from "../organizationContact/OrganizationContactWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type OrganizationContactEmployeeCreateInput = {
  organizationContact: OrganizationContactWhereUniqueInput;
  employee: EmployeeWhereUniqueInput;
};
