import { KnowledgeBaseAuthorWhereInput } from "./KnowledgeBaseAuthorWhereInput";
import { KnowledgeBaseAuthorOrderByInput } from "./KnowledgeBaseAuthorOrderByInput";

export type KnowledgeBaseAuthorFindManyArgs = {
  where?: KnowledgeBaseAuthorWhereInput;
  orderBy?: Array<KnowledgeBaseAuthorOrderByInput>;
  skip?: number;
  take?: number;
};
