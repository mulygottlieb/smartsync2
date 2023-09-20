import { IntegrationEntitySettingTied as TIntegrationEntitySettingTied } from "../api/integrationEntitySettingTied/IntegrationEntitySettingTied";

export const INTEGRATIONENTITYSETTINGTIED_TITLE_FIELD = "entity";

export const IntegrationEntitySettingTiedTitle = (
  record: TIntegrationEntitySettingTied
): string => {
  return record.entity?.toString() || String(record.id);
};
