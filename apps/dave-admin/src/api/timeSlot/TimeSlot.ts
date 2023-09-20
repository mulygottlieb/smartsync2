import { TimeSlotTimeLog } from "../timeSlotTimeLog/TimeSlotTimeLog";
import { Employee } from "../employee/Employee";
import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";
import { Activity } from "../activity/Activity";
import { Screenshot } from "../screenshot/Screenshot";
import { TimeSlotMinute } from "../timeSlotMinute/TimeSlotMinute";

export type TimeSlot = {
  timeSlotTimeLogs?: Array<TimeSlotTimeLog>;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  duration: number;
  keyboard: number;
  mouse: number;
  overall: number;
  startedAt: Date;
  employee?: Employee;
  organization?: Organization | null;
  tenant?: Tenant | null;
  activity?: Array<Activity>;
  screenshot?: Array<Screenshot>;
  timeSlotMinute?: Array<TimeSlotMinute>;
};
