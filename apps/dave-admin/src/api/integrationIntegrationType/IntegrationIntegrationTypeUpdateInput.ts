import { IntegrationWhereUniqueInput } from "../integration/IntegrationWhereUniqueInput";
import { IntegrationTypeWhereUniqueInput } from "../integrationType/IntegrationTypeWhereUniqueInput";

export type IntegrationIntegrationTypeUpdateInput = {
  integration?: IntegrationWhereUniqueInput;
  integrationType?: IntegrationTypeWhereUniqueInput;
};
