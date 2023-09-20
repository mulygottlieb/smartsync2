import { SortOrder } from "../../util/SortOrder";

export type AccountingTemplateOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  languageCode?: SortOrder;
  mjml?: SortOrder;
  hbs?: SortOrder;
  templateType?: SortOrder;
  tenantId?: SortOrder;
  organizationId?: SortOrder;
};
