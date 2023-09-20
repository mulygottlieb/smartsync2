import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagEventTypeUpdateInput = {
  eventType?: EventTypeWhereUniqueInput;
  tag?: TagWhereUniqueInput;
};
