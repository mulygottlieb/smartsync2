import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { IntegrationWhereUniqueInput } from "../integration/IntegrationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TagIntegrationWhereInput = {
  tag?: TagWhereUniqueInput;
  integration?: IntegrationWhereUniqueInput;
  id?: StringFilter;
};
