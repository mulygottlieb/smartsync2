import { Decimal } from "decimal.js";
import { IntegrationIntegrationTypeUpdateManyWithoutIntegrationsInput } from "./IntegrationIntegrationTypeUpdateManyWithoutIntegrationsInput";
import { TagIntegrationUpdateManyWithoutIntegrationsInput } from "./TagIntegrationUpdateManyWithoutIntegrationsInput";

export type IntegrationUpdateInput = {
  name?: string;
  imgSrc?: string | null;
  isComingSoon?: boolean;
  isPaid?: boolean;
  version?: string | null;
  docUrl?: string | null;
  isFreeTrial?: boolean;
  freeTrialPeriod?: Decimal | null;
  order?: number | null;
  integrationIntegrationType?: IntegrationIntegrationTypeUpdateManyWithoutIntegrationsInput;
  tagIntegration?: TagIntegrationUpdateManyWithoutIntegrationsInput;
};
