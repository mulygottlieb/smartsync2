import { SortOrder } from "../../util/SortOrder";

export type IntegrationSettingOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  settingsName?: SortOrder;
  settingsValue?: SortOrder;
  integrationId?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
};
