import { EventType as TEventType } from "../api/eventType/EventType";

export const EVENTTYPE_TITLE_FIELD = "title";

export const EventTypeTitle = (record: TEventType): string => {
  return record.title?.toString() || String(record.id);
};
