import { Employee } from "../employee/Employee";
import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";

export type EmployeeAward = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  year: string;
  employee?: Employee;
  tenant?: Tenant | null;
  organization?: Organization | null;
};
