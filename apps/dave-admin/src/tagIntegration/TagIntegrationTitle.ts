import { TagIntegration as TTagIntegration } from "../api/tagIntegration/TagIntegration";

export const TAGINTEGRATION_TITLE_FIELD = "id";

export const TagIntegrationTitle = (record: TTagIntegration): string => {
  return record.id?.toString() || String(record.id);
};
