import { IntegrationType as TIntegrationType } from "../api/integrationType/IntegrationType";

export const INTEGRATIONTYPE_TITLE_FIELD = "name";

export const IntegrationTypeTitle = (record: TIntegrationType): string => {
  return record.name?.toString() || String(record.id);
};
