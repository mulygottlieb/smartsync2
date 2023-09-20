import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { IntFilter } from "../../util/IntFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { KnowledgeBaseWhereUniqueInput } from "../knowledgeBase/KnowledgeBaseWhereUniqueInput";
import { KnowledgeBaseAuthorListRelationFilter } from "../knowledgeBaseAuthor/KnowledgeBaseAuthorListRelationFilter";

export type KnowledgeBaseArticleWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  description?: StringNullableFilter;
  data?: StringNullableFilter;
  draft?: BooleanFilter;
  privacy?: BooleanFilter;
  index?: IntFilter;
  tenant?: TenantWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  knowledgeBase?: KnowledgeBaseWhereUniqueInput;
  knowledgeBaseAuthor?: KnowledgeBaseAuthorListRelationFilter;
};
