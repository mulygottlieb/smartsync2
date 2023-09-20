import { ChangelogWhereInput } from "./ChangelogWhereInput";
import { ChangelogOrderByInput } from "./ChangelogOrderByInput";

export type ChangelogFindManyArgs = {
  where?: ChangelogWhereInput;
  orderBy?: Array<ChangelogOrderByInput>;
  skip?: number;
  take?: number;
};
