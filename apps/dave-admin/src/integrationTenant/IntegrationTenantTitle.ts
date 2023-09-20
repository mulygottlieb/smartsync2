import { IntegrationTenant as TIntegrationTenant } from "../api/integrationTenant/IntegrationTenant";

export const INTEGRATIONTENANT_TITLE_FIELD = "name";

export const IntegrationTenantTitle = (record: TIntegrationTenant): string => {
  return record.name?.toString() || String(record.id);
};
