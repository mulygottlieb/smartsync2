import { SkillWhereUniqueInput } from "../skill/SkillWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type SkillOrganizationUpdateInput = {
  skill?: SkillWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
};
