import { OrganizationTeam } from "../organizationTeam/OrganizationTeam";
import { Task } from "../task/Task";
import { OrganizationProject } from "../organizationProject/OrganizationProject";
import { Employee } from "../employee/Employee";
import { Organization } from "../organization/Organization";
import { OrganizationContact } from "../organizationContact/OrganizationContact";
import { Timesheet } from "../timesheet/Timesheet";
import { Tenant } from "../tenant/Tenant";
import { TimeSlotTimeLog } from "../timeSlotTimeLog/TimeSlotTimeLog";

export type TimeLog = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  startedAt: Date | null;
  stoppedAt: Date | null;
  logType: string;
  source: string;
  description: string | null;
  reason: string | null;
  isBillable: boolean;
  deletedAt: Date | null;
  isRunning: boolean | null;
  version: string | null;
  organizationTeam?: OrganizationTeam | null;
  task?: Task | null;
  organizationProject?: OrganizationProject | null;
  employee?: Employee;
  organization?: Organization | null;
  organizationContact?: OrganizationContact | null;
  timesheet?: Timesheet | null;
  tenant?: Tenant | null;
  timeSlotTimeLogs?: Array<TimeSlotTimeLog>;
};
