import { TagEventTypeWhereInput } from "./TagEventTypeWhereInput";
import { TagEventTypeOrderByInput } from "./TagEventTypeOrderByInput";

export type TagEventTypeFindManyArgs = {
  where?: TagEventTypeWhereInput;
  orderBy?: Array<TagEventTypeOrderByInput>;
  skip?: number;
  take?: number;
};
