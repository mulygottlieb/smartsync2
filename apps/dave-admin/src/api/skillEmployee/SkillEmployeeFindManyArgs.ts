import { SkillEmployeeWhereInput } from "./SkillEmployeeWhereInput";
import { SkillEmployeeOrderByInput } from "./SkillEmployeeOrderByInput";

export type SkillEmployeeFindManyArgs = {
  where?: SkillEmployeeWhereInput;
  orderBy?: Array<SkillEmployeeOrderByInput>;
  skip?: number;
  take?: number;
};
