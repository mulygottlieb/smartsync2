import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { IntegrationWhereUniqueInput } from "../integration/IntegrationWhereUniqueInput";

export type TagIntegrationUpdateInput = {
  tag?: TagWhereUniqueInput;
  integration?: IntegrationWhereUniqueInput;
};
