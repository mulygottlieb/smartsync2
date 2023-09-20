import { SortOrder } from "../../util/SortOrder";

export type FeatureOrganizationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  isEnabled?: SortOrder;
  organizationId?: SortOrder;
  featureId?: SortOrder;
  tenantId?: SortOrder;
};
