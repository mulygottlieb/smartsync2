import { Tenant } from "../tenant/Tenant";
import { Task } from "../task/Task";
import { Organization } from "../organization/Organization";
import { OrganizationProject } from "../organizationProject/OrganizationProject";

export type OrganizationSprint = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  goal: string | null;
  tenant?: Tenant | null;
  length: number;
  startDate: Date | null;
  endDate: Date | null;
  dayStart: number | null;
  task?: Array<Task>;
  isActive: boolean | null;
  organization?: Organization | null;
  organizationProject?: OrganizationProject;
};
