import { SortOrder } from "../../util/SortOrder";

export type EmailTemplateOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  languageCode?: SortOrder;
  mjml?: SortOrder;
  hbs?: SortOrder;
  tenantId?: SortOrder;
  organizationId?: SortOrder;
};
