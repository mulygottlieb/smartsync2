import { OrganizationContact } from "../organizationContact/OrganizationContact";
import { Employee } from "../employee/Employee";

export type OrganizationContactEmployee = {
  organizationContact?: OrganizationContact;
  employee?: Employee;
  id: string;
};
