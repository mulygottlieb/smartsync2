import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";

export type GoalTimeFrame = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  status: string;
  startDate: Date;
  endDate: Date;
  organization?: Organization | null;
  tenant?: Tenant | null;
};
