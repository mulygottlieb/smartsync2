import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { KnowledgeBaseArticleWhereUniqueInput } from "../knowledgeBaseArticle/KnowledgeBaseArticleWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type KnowledgeBaseAuthorWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  tenant?: TenantWhereUniqueInput;
  knowledgeBaseArticle?: KnowledgeBaseArticleWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  employee?: EmployeeWhereUniqueInput;
};
