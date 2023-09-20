import { OrganizationProjectWhereUniqueInput } from "../organizationProject/OrganizationProjectWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type OrganizationProjectEmployeeCreateInput = {
  organizationProject: OrganizationProjectWhereUniqueInput;
  employee: EmployeeWhereUniqueInput;
};
