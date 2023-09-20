import { IntegrationWhereUniqueInput } from "../integration/IntegrationWhereUniqueInput";
import { IntegrationTypeWhereUniqueInput } from "../integrationType/IntegrationTypeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type IntegrationIntegrationTypeWhereInput = {
  integration?: IntegrationWhereUniqueInput;
  integrationType?: IntegrationTypeWhereUniqueInput;
  id?: StringFilter;
};
