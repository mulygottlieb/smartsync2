import { TaskLinkedIssueWhereInput } from "./TaskLinkedIssueWhereInput";
import { TaskLinkedIssueOrderByInput } from "./TaskLinkedIssueOrderByInput";

export type TaskLinkedIssueFindManyArgs = {
  where?: TaskLinkedIssueWhereInput;
  orderBy?: Array<TaskLinkedIssueOrderByInput>;
  skip?: number;
  take?: number;
};
