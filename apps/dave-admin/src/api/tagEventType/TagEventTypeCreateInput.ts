import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagEventTypeCreateInput = {
  eventType: EventTypeWhereUniqueInput;
  tag: TagWhereUniqueInput;
};
