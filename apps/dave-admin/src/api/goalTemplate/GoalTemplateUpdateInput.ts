import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { KeyResultTemplateUpdateManyWithoutGoalTemplatesInput } from "./KeyResultTemplateUpdateManyWithoutGoalTemplatesInput";

export type GoalTemplateUpdateInput = {
  name?: string;
  level?: string;
  category?: string;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  keyResultTemplate?: KeyResultTemplateUpdateManyWithoutGoalTemplatesInput;
};
