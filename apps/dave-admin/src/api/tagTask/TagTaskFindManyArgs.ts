import { TagTaskWhereInput } from "./TagTaskWhereInput";
import { TagTaskOrderByInput } from "./TagTaskOrderByInput";

export type TagTaskFindManyArgs = {
  where?: TagTaskWhereInput;
  orderBy?: Array<TagTaskOrderByInput>;
  skip?: number;
  take?: number;
};
