import { TagUserWhereInput } from "./TagUserWhereInput";
import { TagUserOrderByInput } from "./TagUserOrderByInput";

export type TagUserFindManyArgs = {
  where?: TagUserWhereInput;
  orderBy?: Array<TagUserOrderByInput>;
  skip?: number;
  take?: number;
};
