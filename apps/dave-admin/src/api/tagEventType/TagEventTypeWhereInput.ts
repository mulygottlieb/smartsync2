import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TagEventTypeWhereInput = {
  eventType?: EventTypeWhereUniqueInput;
  tag?: TagWhereUniqueInput;
  id?: StringFilter;
};
