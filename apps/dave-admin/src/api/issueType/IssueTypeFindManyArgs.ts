import { IssueTypeWhereInput } from "./IssueTypeWhereInput";
import { IssueTypeOrderByInput } from "./IssueTypeOrderByInput";

export type IssueTypeFindManyArgs = {
  where?: IssueTypeWhereInput;
  orderBy?: Array<IssueTypeOrderByInput>;
  skip?: number;
  take?: number;
};
