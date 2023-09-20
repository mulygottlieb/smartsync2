import { IntegrationEntitySetting as TIntegrationEntitySetting } from "../api/integrationEntitySetting/IntegrationEntitySetting";

export const INTEGRATIONENTITYSETTING_TITLE_FIELD = "entity";

export const IntegrationEntitySettingTitle = (
  record: TIntegrationEntitySetting
): string => {
  return record.entity?.toString() || String(record.id);
};
