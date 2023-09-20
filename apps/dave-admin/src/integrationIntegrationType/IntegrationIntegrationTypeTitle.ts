import { IntegrationIntegrationType as TIntegrationIntegrationType } from "../api/integrationIntegrationType/IntegrationIntegrationType";

export const INTEGRATIONINTEGRATIONTYPE_TITLE_FIELD = "id";

export const IntegrationIntegrationTypeTitle = (
  record: TIntegrationIntegrationType
): string => {
  return record.id?.toString() || String(record.id);
};
