import { SkillWhereUniqueInput } from "../skill/SkillWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type SkillOrganizationWhereInput = {
  skill?: SkillWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  id?: StringFilter;
};
