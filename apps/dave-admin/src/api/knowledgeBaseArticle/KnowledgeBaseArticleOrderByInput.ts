import { SortOrder } from "../../util/SortOrder";

export type KnowledgeBaseArticleOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  data?: SortOrder;
  draft?: SortOrder;
  privacy?: SortOrder;
  index?: SortOrder;
  tenantId?: SortOrder;
  organizationId?: SortOrder;
  categoryId?: SortOrder;
};
