import { SortOrder } from "../../util/SortOrder";

export type KnowledgeBaseAuthorOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  tenantId?: SortOrder;
  articleId?: SortOrder;
  organizationId?: SortOrder;
  employeeId?: SortOrder;
};
