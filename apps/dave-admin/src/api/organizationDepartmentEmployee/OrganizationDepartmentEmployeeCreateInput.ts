import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { OrganizationDepartmentWhereUniqueInput } from "../organizationDepartment/OrganizationDepartmentWhereUniqueInput";

export type OrganizationDepartmentEmployeeCreateInput = {
  employee: EmployeeWhereUniqueInput;
  organizationDepartment: OrganizationDepartmentWhereUniqueInput;
};
