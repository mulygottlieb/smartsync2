import { SortOrder } from "../../util/SortOrder";

export type ProductTypeTranslationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  languageCode?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
  referenceId?: SortOrder;
};