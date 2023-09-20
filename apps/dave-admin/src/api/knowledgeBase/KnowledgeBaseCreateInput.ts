import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { KnowledgeBaseWhereUniqueInput } from "./KnowledgeBaseWhereUniqueInput";
import { KnowledgeBaseCreateNestedManyWithoutKnowledgeBasesInput } from "./KnowledgeBaseCreateNestedManyWithoutKnowledgeBasesInput";
import { KnowledgeBaseArticleCreateNestedManyWithoutKnowledgeBasesInput } from "./KnowledgeBaseArticleCreateNestedManyWithoutKnowledgeBasesInput";

export type KnowledgeBaseCreateInput = {
  name: string;
  flag: string;
  icon: string;
  privacy: string;
  language: string;
  color: string;
  description?: string | null;
  data?: string | null;
  index?: number | null;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  knowledgeBase?: KnowledgeBaseWhereUniqueInput | null;
  otherKnowledgeBase?: KnowledgeBaseCreateNestedManyWithoutKnowledgeBasesInput;
  knowledgeBaseArticle?: KnowledgeBaseArticleCreateNestedManyWithoutKnowledgeBasesInput;
};
