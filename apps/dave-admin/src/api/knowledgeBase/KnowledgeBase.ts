import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";
import { KnowledgeBaseArticle } from "../knowledgeBaseArticle/KnowledgeBaseArticle";

export type KnowledgeBase = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  flag: string;
  icon: string;
  privacy: string;
  language: string;
  color: string;
  description: string | null;
  data: string | null;
  index: number | null;
  organization?: Organization | null;
  tenant?: Tenant | null;
  knowledgeBase?: KnowledgeBase | null;
  otherKnowledgeBase?: Array<KnowledgeBase>;
  knowledgeBaseArticle?: Array<KnowledgeBaseArticle>;
};
