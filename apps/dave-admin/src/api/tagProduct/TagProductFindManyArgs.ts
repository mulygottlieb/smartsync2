import { TagProductWhereInput } from "./TagProductWhereInput";
import { TagProductOrderByInput } from "./TagProductOrderByInput";

export type TagProductFindManyArgs = {
  where?: TagProductWhereInput;
  orderBy?: Array<TagProductOrderByInput>;
  skip?: number;
  take?: number;
};
