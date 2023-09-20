import { SortOrder } from "../../util/SortOrder";

export type SkillOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  color?: SortOrder;
  tenantId?: SortOrder;
  organizationId?: SortOrder;
};
