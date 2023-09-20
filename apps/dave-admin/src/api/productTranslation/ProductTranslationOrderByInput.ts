import { SortOrder } from "../../util/SortOrder";

export type ProductTranslationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  languageCode?: SortOrder;
  tenantId?: SortOrder;
  referenceId?: SortOrder;
  organizationId?: SortOrder;
};
