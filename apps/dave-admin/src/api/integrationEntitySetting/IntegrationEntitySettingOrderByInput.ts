import { SortOrder } from "../../util/SortOrder";

export type IntegrationEntitySettingOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  entity?: SortOrder;
  sync?: SortOrder;
  tenantId?: SortOrder;
  organizationId?: SortOrder;
  integrationId?: SortOrder;
};
