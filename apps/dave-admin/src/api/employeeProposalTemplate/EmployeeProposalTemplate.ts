import { Employee } from "../employee/Employee";
import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";

export type EmployeeProposalTemplate = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  content: string | null;
  isDefault: boolean;
  employee?: Employee;
  organization?: Organization | null;
  tenant?: Tenant | null;
};
