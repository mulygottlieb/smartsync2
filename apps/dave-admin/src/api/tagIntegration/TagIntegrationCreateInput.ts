import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { IntegrationWhereUniqueInput } from "../integration/IntegrationWhereUniqueInput";

export type TagIntegrationCreateInput = {
  tag: TagWhereUniqueInput;
  integration: IntegrationWhereUniqueInput;
};
