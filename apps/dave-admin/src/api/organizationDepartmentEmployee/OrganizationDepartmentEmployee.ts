import { Employee } from "../employee/Employee";
import { OrganizationDepartment } from "../organizationDepartment/OrganizationDepartment";

export type OrganizationDepartmentEmployee = {
  employee?: Employee;
  organizationDepartment?: OrganizationDepartment;
  id: string;
};
