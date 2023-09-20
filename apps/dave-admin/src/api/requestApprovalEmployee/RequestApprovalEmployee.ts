import { Organization } from "../organization/Organization";
import { RequestApproval } from "../requestApproval/RequestApproval";
import { Tenant } from "../tenant/Tenant";
import { Employee } from "../employee/Employee";

export type RequestApprovalEmployee = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status: number | null;
  organization?: Organization | null;
  requestApproval?: RequestApproval;
  tenant?: Tenant | null;
  employee?: Employee;
};
