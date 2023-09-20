import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type TaskLinkedIssueCreateInput = {
  action: number;
  taskTaskLinkedIssuesTaskToIdTotask: TaskWhereUniqueInput;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  taskTaskLinkedIssuesTaskFromIdTotask: TaskWhereUniqueInput;
};
