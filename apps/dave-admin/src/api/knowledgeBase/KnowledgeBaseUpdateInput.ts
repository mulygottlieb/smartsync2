import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { KnowledgeBaseWhereUniqueInput } from "./KnowledgeBaseWhereUniqueInput";
import { KnowledgeBaseUpdateManyWithoutKnowledgeBasesInput } from "./KnowledgeBaseUpdateManyWithoutKnowledgeBasesInput";
import { KnowledgeBaseArticleUpdateManyWithoutKnowledgeBasesInput } from "./KnowledgeBaseArticleUpdateManyWithoutKnowledgeBasesInput";

export type KnowledgeBaseUpdateInput = {
  name?: string;
  flag?: string;
  icon?: string;
  privacy?: string;
  language?: string;
  color?: string;
  description?: string | null;
  data?: string | null;
  index?: number | null;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  knowledgeBase?: KnowledgeBaseWhereUniqueInput | null;
  otherKnowledgeBase?: KnowledgeBaseUpdateManyWithoutKnowledgeBasesInput;
  knowledgeBaseArticle?: KnowledgeBaseArticleUpdateManyWithoutKnowledgeBasesInput;
};
