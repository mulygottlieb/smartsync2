import { IntegrationSetting as TIntegrationSetting } from "../api/integrationSetting/IntegrationSetting";

export const INTEGRATIONSETTING_TITLE_FIELD = "settingsName";

export const IntegrationSettingTitle = (
  record: TIntegrationSetting
): string => {
  return record.settingsName?.toString() || String(record.id);
};
