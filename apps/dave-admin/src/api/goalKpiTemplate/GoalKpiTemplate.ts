import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";
import { Employee } from "../employee/Employee";
import { KeyResultTemplate } from "../keyResultTemplate/KeyResultTemplate";

export type GoalKpiTemplate = {
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
  organization?: Organization | null;
  employee?: Employee | null;
  keyResultTemplate?: Array<KeyResultTemplate>;
};
