import { Tenant } from "../tenant/Tenant";
import { Employee } from "../employee/Employee";
import { Organization } from "../organization/Organization";
import { KeyResult } from "../keyResult/KeyResult";

export type GoalKpi = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description: string | null;
  typeField: string;
  unit: string | null;
  operator: string;
  currentValue: number;
  targetValue: number;
  tenant?: Tenant | null;
  employee?: Employee | null;
  organization?: Organization | null;
  keyResult?: Array<KeyResult>;
};
