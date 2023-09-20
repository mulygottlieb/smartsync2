import { SortOrder } from "../../util/SortOrder";

export type IntegrationMapOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  entity?: SortOrder;
  sourceId?: SortOrder;
  gauzyId?: SortOrder;
  organizationId?: SortOrder;
  integrationId?: SortOrder;
  tenantId?: SortOrder;
};
