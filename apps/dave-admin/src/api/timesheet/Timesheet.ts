import { Tenant } from "../tenant/Tenant";
import { User } from "../user/User";
import { Employee } from "../employee/Employee";
import { Organization } from "../organization/Organization";
import { TimeLog } from "../timeLog/TimeLog";

export type Timesheet = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  duration: number;
  keyboard: number;
  mouse: number;
  overall: number;
  startedAt: Date | null;
  stoppedAt: Date | null;
  approvedAt: Date | null;
  submittedAt: Date | null;
  lockedAt: Date | null;
  isBilled: boolean;
  status: string;
  deletedAt: Date | null;
  tenant?: Tenant | null;
  user?: User | null;
  employee?: Employee;
  organization?: Organization | null;
  timeLog?: Array<TimeLog>;
};
