import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { OrganizationDepartmentWhereUniqueInput } from "../organizationDepartment/OrganizationDepartmentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type OrganizationDepartmentEmployeeWhereInput = {
  employee?: EmployeeWhereUniqueInput;
  organizationDepartment?: OrganizationDepartmentWhereUniqueInput;
  id?: StringFilter;
};
