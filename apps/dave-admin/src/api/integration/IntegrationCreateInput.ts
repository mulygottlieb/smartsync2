import { Decimal } from "decimal.js";
import { IntegrationIntegrationTypeCreateNestedManyWithoutIntegrationsInput } from "./IntegrationIntegrationTypeCreateNestedManyWithoutIntegrationsInput";
import { TagIntegrationCreateNestedManyWithoutIntegrationsInput } from "./TagIntegrationCreateNestedManyWithoutIntegrationsInput";

export type IntegrationCreateInput = {
  name: string;
  imgSrc?: string | null;
  isComingSoon: boolean;
  isPaid: boolean;
  version?: string | null;
  docUrl?: string | null;
  isFreeTrial: boolean;
  freeTrialPeriod?: Decimal | null;
  order?: number | null;
  integrationIntegrationType?: IntegrationIntegrationTypeCreateNestedManyWithoutIntegrationsInput;
  tagIntegration?: TagIntegrationCreateNestedManyWithoutIntegrationsInput;
};
