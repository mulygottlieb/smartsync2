import { SortOrder } from "../../util/SortOrder";

export type IntegrationEntitySettingTiedOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  entity?: SortOrder;
  sync?: SortOrder;
  integrationEntitySettingId?: SortOrder;
  tenantId?: SortOrder;
  organizationId?: SortOrder;
};
