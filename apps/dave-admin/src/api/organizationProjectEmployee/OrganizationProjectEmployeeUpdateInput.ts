import { OrganizationProjectWhereUniqueInput } from "../organizationProject/OrganizationProjectWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type OrganizationProjectEmployeeUpdateInput = {
  organizationProject?: OrganizationProjectWhereUniqueInput;
  employee?: EmployeeWhereUniqueInput;
};
