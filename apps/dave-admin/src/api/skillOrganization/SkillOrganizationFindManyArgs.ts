import { SkillOrganizationWhereInput } from "./SkillOrganizationWhereInput";
import { SkillOrganizationOrderByInput } from "./SkillOrganizationOrderByInput";

export type SkillOrganizationFindManyArgs = {
  where?: SkillOrganizationWhereInput;
  orderBy?: Array<SkillOrganizationOrderByInput>;
  skip?: number;
  take?: number;
};
