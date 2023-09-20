import { SortOrder } from "../../util/SortOrder";

export type ChangelogOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  icon?: SortOrder;
  title?: SortOrder;
  date?: SortOrder;
  content?: SortOrder;
  learnMoreUrl?: SortOrder;
  isFeature?: SortOrder;
  imageUrl?: SortOrder;
  tenantId?: SortOrder;
  organizationId?: SortOrder;
};
