import { OrganizationEmploymentType } from "../organizationEmploymentType/OrganizationEmploymentType";
import { Employee } from "../employee/Employee";

export type OrganizationEmploymentTypeEmployee = {
  organizationEmploymentType?: OrganizationEmploymentType;
  employee?: Employee;
  id: string;
};
