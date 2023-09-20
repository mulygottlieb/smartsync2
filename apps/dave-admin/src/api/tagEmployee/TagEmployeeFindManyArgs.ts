import { TagEmployeeWhereInput } from "./TagEmployeeWhereInput";
import { TagEmployeeOrderByInput } from "./TagEmployeeOrderByInput";

export type TagEmployeeFindManyArgs = {
  where?: TagEmployeeWhereInput;
  orderBy?: Array<TagEmployeeOrderByInput>;
  skip?: number;
  take?: number;
};
