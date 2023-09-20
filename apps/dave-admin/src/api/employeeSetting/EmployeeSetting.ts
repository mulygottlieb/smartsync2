import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";
import { Employee } from "../employee/Employee";

export type EmployeeSetting = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  month: number;
  year: number;
  settingType: string;
  value: number;
  currency: string;
  organization?: Organization | null;
  tenant?: Tenant | null;
  employee?: Employee;
};
