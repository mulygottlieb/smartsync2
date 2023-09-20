import { Skill } from "../skill/Skill";
import { Organization } from "../organization/Organization";

export type SkillOrganization = {
  skill?: Skill;
  organization?: Organization;
  id: string;
};
