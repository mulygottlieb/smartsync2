import { KnowledgeBase as TKnowledgeBase } from "../api/knowledgeBase/KnowledgeBase";

export const KNOWLEDGEBASE_TITLE_FIELD = "name";

export const KnowledgeBaseTitle = (record: TKnowledgeBase): string => {
  return record.name?.toString() || String(record.id);
};
