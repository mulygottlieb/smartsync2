import { KnowledgeBaseArticle as TKnowledgeBaseArticle } from "../api/knowledgeBaseArticle/KnowledgeBaseArticle";

export const KNOWLEDGEBASEARTICLE_TITLE_FIELD = "name";

export const KnowledgeBaseArticleTitle = (
  record: TKnowledgeBaseArticle
): string => {
  return record.name?.toString() || String(record.id);
};
