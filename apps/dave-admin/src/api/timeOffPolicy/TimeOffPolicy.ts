import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";
import { TimeOffPolicyEmployee } from "../timeOffPolicyEmployee/TimeOffPolicyEmployee";
import { TimeOffRequest } from "../timeOffRequest/TimeOffRequest";

export type TimeOffPolicy = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  requiresApproval: boolean;
  paid: boolean;
  tenant?: Tenant | null;
  organization?: Organization | null;
  timeOffPolicyEmployee?: Array<TimeOffPolicyEmployee>;
  timeOffRequest?: Array<TimeOffRequest>;
};
