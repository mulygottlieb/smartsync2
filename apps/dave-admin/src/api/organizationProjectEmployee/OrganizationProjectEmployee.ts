import { OrganizationProject } from "../organizationProject/OrganizationProject";
import { Employee } from "../employee/Employee";

export type OrganizationProjectEmployee = {
  organizationProject?: OrganizationProject;
  employee?: Employee;
  id: string;
};
