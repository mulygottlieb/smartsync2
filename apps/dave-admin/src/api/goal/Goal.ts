import { Employee } from "../employee/Employee";
import { KeyResult } from "../keyResult/KeyResult";
import { Tenant } from "../tenant/Tenant";
import { OrganizationTeam } from "../organizationTeam/OrganizationTeam";
import { Organization } from "../organization/Organization";

export type Goal = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description: string;
  deadline: string;
  level: string;
  progress: number;
  employeeGoalOwnerEmployeeIdToemployee?: Employee | null;
  keyResultGoalAlignedKeyResultIdTokeyResult?: KeyResult | null;
  tenant?: Tenant | null;
  organizationTeam?: OrganizationTeam | null;
  employeeGoalLeadIdToemployee?: Employee | null;
  organization?: Organization | null;
  keyResultKeyResultGoalIdTogoal?: Array<KeyResult>;
};
