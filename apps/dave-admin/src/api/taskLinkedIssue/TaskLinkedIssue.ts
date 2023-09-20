import { Task } from "../task/Task";
import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";

export type TaskLinkedIssue = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  action: number;
  taskTaskLinkedIssuesTaskToIdTotask?: Task;
  tenant?: Tenant | null;
  organization?: Organization | null;
  taskTaskLinkedIssuesTaskFromIdTotask?: Task;
};
