import { IntegrationIntegrationTypeCreateNestedManyWithoutIntegrationTypesInput } from "./IntegrationIntegrationTypeCreateNestedManyWithoutIntegrationTypesInput";

export type IntegrationTypeCreateInput = {
  name: string;
  groupName: string;
  order: number;
  integrationIntegrationType?: IntegrationIntegrationTypeCreateNestedManyWithoutIntegrationTypesInput;
};
