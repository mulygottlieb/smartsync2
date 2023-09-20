import { IntegrationWhereUniqueInput } from "../integration/IntegrationWhereUniqueInput";
import { IntegrationTypeWhereUniqueInput } from "../integrationType/IntegrationTypeWhereUniqueInput";

export type IntegrationIntegrationTypeCreateInput = {
  integration: IntegrationWhereUniqueInput;
  integrationType: IntegrationTypeWhereUniqueInput;
};
