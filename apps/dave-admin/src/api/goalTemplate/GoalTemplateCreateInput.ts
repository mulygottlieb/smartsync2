import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { KeyResultTemplateCreateNestedManyWithoutGoalTemplatesInput } from "./KeyResultTemplateCreateNestedManyWithoutGoalTemplatesInput";

export type GoalTemplateCreateInput = {
  name: string;
  level: string;
  category: string;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  keyResultTemplate?: KeyResultTemplateCreateNestedManyWithoutGoalTemplatesInput;
};
