import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { SkillEmployeeCreateNestedManyWithoutSkillsInput } from "./SkillEmployeeCreateNestedManyWithoutSkillsInput";
import { SkillOrganizationCreateNestedManyWithoutSkillsInput } from "./SkillOrganizationCreateNestedManyWithoutSkillsInput";

export type SkillCreateInput = {
  name: string;
  description?: string | null;
  color: string;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  skillEmployee?: SkillEmployeeCreateNestedManyWithoutSkillsInput;
  skillOrganization?: SkillOrganizationCreateNestedManyWithoutSkillsInput;
};
