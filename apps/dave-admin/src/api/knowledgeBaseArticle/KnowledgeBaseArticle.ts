import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";
import { KnowledgeBase } from "../knowledgeBase/KnowledgeBase";
import { KnowledgeBaseAuthor } from "../knowledgeBaseAuthor/KnowledgeBaseAuthor";

export type KnowledgeBaseArticle = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description: string | null;
  data: string | null;
  draft: boolean;
  privacy: boolean;
  index: number;
  tenant?: Tenant | null;
  organization?: Organization | null;
  knowledgeBase?: KnowledgeBase;
  knowledgeBaseAuthor?: Array<KnowledgeBaseAuthor>;
};
