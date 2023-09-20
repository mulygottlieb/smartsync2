import { Tenant } from "../tenant/Tenant";
import { KnowledgeBaseArticle } from "../knowledgeBaseArticle/KnowledgeBaseArticle";
import { Organization } from "../organization/Organization";
import { Employee } from "../employee/Employee";

export type KnowledgeBaseAuthor = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  tenant?: Tenant | null;
  knowledgeBaseArticle?: KnowledgeBaseArticle;
  organization?: Organization | null;
  employee?: Employee;
};
