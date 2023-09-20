import { OrganizationEmploymentTypeWhereUniqueInput } from "../organizationEmploymentType/OrganizationEmploymentTypeWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type OrganizationEmploymentTypeEmployeeCreateInput = {
  organizationEmploymentType: OrganizationEmploymentTypeWhereUniqueInput;
  employee: EmployeeWhereUniqueInput;
};
