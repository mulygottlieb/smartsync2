import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";

export type GoalGeneralSetting = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  maxObjectives: number;
  maxKeyResults: number;
  employeeCanCreateObjective: boolean;
  canOwnObjectives: string;
  canOwnKeyResult: string;
  krTypeKPI: boolean;
  krTypeTask: boolean;
  tenant?: Tenant | null;
  organization?: Organization | null;
};
