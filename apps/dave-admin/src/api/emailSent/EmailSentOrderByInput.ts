import { SortOrder } from "../../util/SortOrder";

export type EmailSentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  content?: SortOrder;
  email?: SortOrder;
  isArchived?: SortOrder;
  tenantId?: SortOrder;
  userId?: SortOrder;
  organizationId?: SortOrder;
  emailTemplateId?: SortOrder;
};
