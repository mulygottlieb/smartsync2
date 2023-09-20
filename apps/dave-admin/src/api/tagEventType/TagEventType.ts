import { EventType } from "../eventType/EventType";
import { Tag } from "../tag/Tag";

export type TagEventType = {
  eventType?: EventType;
  tag?: Tag;
  id: string;
};
