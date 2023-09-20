import { GoalTemplateWhereUniqueInput } from "../goalTemplate/GoalTemplateWhereUniqueInput";
import { GoalKpiTemplateWhereUniqueInput } from "../goalKpiTemplate/GoalKpiTemplateWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type KeyResultTemplateCreateInput = {
  name: string;
  typeField: string;
  unit?: string | null;
  targetValue?: number | null;
  initialValue?: number | null;
  deadline: string;
  goalTemplate?: GoalTemplateWhereUniqueInput | null;
  goalKpiTemplate?: GoalKpiTemplateWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
};
