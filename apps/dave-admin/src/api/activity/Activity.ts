import { JsonValue } from "type-fest";
import { Task } from "../task/Task";
import { TimeSlot } from "../timeSlot/TimeSlot";
import { OrganizationProject } from "../organizationProject/OrganizationProject";
import { Employee } from "../employee/Employee";
import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";

export type Activity = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  metaData: JsonValue;
  date: Date;
  time: Date;
  duration: number;
  typeField: string | null;
  source: string;
  deletedAt: Date | null;
  recordedAt: Date | null;
  task?: Task | null;
  timeSlot?: TimeSlot | null;
  organizationProject?: OrganizationProject | null;
  employee?: Employee;
  tenant?: Tenant | null;
  organization?: Organization | null;
};
