import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { OrganizationDepartmentWhereUniqueInput } from "../organizationDepartment/OrganizationDepartmentWhereUniqueInput";

export type OrganizationDepartmentEmployeeUpdateInput = {
  employee?: EmployeeWhereUniqueInput;
  organizationDepartment?: OrganizationDepartmentWhereUniqueInput;
};
