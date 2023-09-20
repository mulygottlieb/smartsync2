import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";
import { SkillEmployee } from "../skillEmployee/SkillEmployee";
import { SkillOrganization } from "../skillOrganization/SkillOrganization";

export type Skill = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description: string | null;
  color: string;
  tenant?: Tenant | null;
  organization?: Organization | null;
  skillEmployee?: Array<SkillEmployee>;
  skillOrganization?: Array<SkillOrganization>;
};
