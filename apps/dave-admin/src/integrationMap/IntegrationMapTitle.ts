import { IntegrationMap as TIntegrationMap } from "../api/integrationMap/IntegrationMap";

export const INTEGRATIONMAP_TITLE_FIELD = "entity";

export const IntegrationMapTitle = (record: TIntegrationMap): string => {
  return record.entity?.toString() || String(record.id);
};
