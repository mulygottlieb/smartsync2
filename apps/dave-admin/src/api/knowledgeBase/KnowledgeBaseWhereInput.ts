import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { KnowledgeBaseWhereUniqueInput } from "./KnowledgeBaseWhereUniqueInput";
import { KnowledgeBaseListRelationFilter } from "./KnowledgeBaseListRelationFilter";
import { KnowledgeBaseArticleListRelationFilter } from "../knowledgeBaseArticle/KnowledgeBaseArticleListRelationFilter";

export type KnowledgeBaseWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  flag?: StringFilter;
  icon?: StringFilter;
  privacy?: StringFilter;
  language?: StringFilter;
  color?: StringFilter;
  description?: StringNullableFilter;
  data?: StringNullableFilter;
  index?: IntNullableFilter;
  organization?: OrganizationWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  knowledgeBase?: KnowledgeBaseWhereUniqueInput;
  otherKnowledgeBase?: KnowledgeBaseListRelationFilter;
  knowledgeBaseArticle?: KnowledgeBaseArticleListRelationFilter;
};
