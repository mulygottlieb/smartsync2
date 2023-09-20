import { TenantSetting as TTenantSetting } from "../api/tenantSetting/TenantSetting";

export const TENANTSETTING_TITLE_FIELD = "name";

export const TenantSettingTitle = (record: TTenantSetting): string => {
  return record.name?.toString() || String(record.id);
};
