import { KnowledgeBaseAuthor as TKnowledgeBaseAuthor } from "../api/knowledgeBaseAuthor/KnowledgeBaseAuthor";

export const KNOWLEDGEBASEAUTHOR_TITLE_FIELD = "id";

export const KnowledgeBaseAuthorTitle = (
  record: TKnowledgeBaseAuthor
): string => {
  return record.id?.toString() || String(record.id);
};
