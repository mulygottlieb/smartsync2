import { OrganizationEmploymentTypeWhereUniqueInput } from "../organizationEmploymentType/OrganizationEmploymentTypeWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type OrganizationEmploymentTypeEmployeeUpdateInput = {
  organizationEmploymentType?: OrganizationEmploymentTypeWhereUniqueInput;
  employee?: EmployeeWhereUniqueInput;
};
