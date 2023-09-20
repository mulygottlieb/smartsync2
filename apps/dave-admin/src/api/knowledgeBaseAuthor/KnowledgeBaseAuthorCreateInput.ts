import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { KnowledgeBaseArticleWhereUniqueInput } from "../knowledgeBaseArticle/KnowledgeBaseArticleWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type KnowledgeBaseAuthorCreateInput = {
  tenant?: TenantWhereUniqueInput | null;
  knowledgeBaseArticle: KnowledgeBaseArticleWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput | null;
  employee: EmployeeWhereUniqueInput;
};
