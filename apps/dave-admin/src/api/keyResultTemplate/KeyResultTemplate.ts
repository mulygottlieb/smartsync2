import { GoalTemplate } from "../goalTemplate/GoalTemplate";
import { GoalKpiTemplate } from "../goalKpiTemplate/GoalKpiTemplate";
import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";

export type KeyResultTemplate = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  typeField: string;
  unit: string | null;
  targetValue: number | null;
  initialValue: number | null;
  deadline: string;
  goalTemplate?: GoalTemplate | null;
  goalKpiTemplate?: GoalKpiTemplate | null;
  tenant?: Tenant | null;
  organization?: Organization | null;
};
