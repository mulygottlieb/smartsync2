import { SkillWhereUniqueInput } from "../skill/SkillWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type SkillOrganizationCreateInput = {
  skill: SkillWhereUniqueInput;
  organization: OrganizationWhereUniqueInput;
};
