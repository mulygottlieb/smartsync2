import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { KnowledgeBaseWhereUniqueInput } from "../knowledgeBase/KnowledgeBaseWhereUniqueInput";
import { KnowledgeBaseAuthorUpdateManyWithoutKnowledgeBaseArticlesInput } from "./KnowledgeBaseAuthorUpdateManyWithoutKnowledgeBaseArticlesInput";

export type KnowledgeBaseArticleUpdateInput = {
  name?: string;
  description?: string | null;
  data?: string | null;
  draft?: boolean;
  privacy?: boolean;
  index?: number;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  knowledgeBase?: KnowledgeBaseWhereUniqueInput;
  knowledgeBaseAuthor?: KnowledgeBaseAuthorUpdateManyWithoutKnowledgeBaseArticlesInput;
};
