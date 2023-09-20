import { SortOrder } from "../../util/SortOrder";

export type KnowledgeBaseOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  flag?: SortOrder;
  icon?: SortOrder;
  privacy?: SortOrder;
  language?: SortOrder;
  color?: SortOrder;
  description?: SortOrder;
  data?: SortOrder;
  index?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
  parentId?: SortOrder;
};
