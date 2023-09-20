import { TagEventType as TTagEventType } from "../api/tagEventType/TagEventType";

export const TAGEVENTTYPE_TITLE_FIELD = "id";

export const TagEventTypeTitle = (record: TTagEventType): string => {
  return record.id?.toString() || String(record.id);
};
