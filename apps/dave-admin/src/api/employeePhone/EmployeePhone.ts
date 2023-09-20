import { Organization } from "../organization/Organization";
import { Employee } from "../employee/Employee";
import { Tenant } from "../tenant/Tenant";

export type EmployeePhone = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  typeField: string | null;
  phoneNumber: string;
  organization?: Organization | null;
  employee?: Employee;
  tenant?: Tenant | null;
};
