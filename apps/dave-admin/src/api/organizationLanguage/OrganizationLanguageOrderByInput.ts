import { SortOrder } from "../../util/SortOrder";

export type OrganizationLanguageOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  level?: SortOrder;
  languageCode?: SortOrder;
  tenantId?: SortOrder;
  organizationId?: SortOrder;
};
