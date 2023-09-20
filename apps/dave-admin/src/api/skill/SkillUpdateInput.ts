import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { SkillEmployeeUpdateManyWithoutSkillsInput } from "./SkillEmployeeUpdateManyWithoutSkillsInput";
import { SkillOrganizationUpdateManyWithoutSkillsInput } from "./SkillOrganizationUpdateManyWithoutSkillsInput";

export type SkillUpdateInput = {
  name?: string;
  description?: string | null;
  color?: string;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  skillEmployee?: SkillEmployeeUpdateManyWithoutSkillsInput;
  skillOrganization?: SkillOrganizationUpdateManyWithoutSkillsInput;
};
