import { SortOrder } from "../../util/SortOrder";

export type TagTaskOrderByInput = {
  taskId?: SortOrder;
  tagId?: SortOrder;
  id?: SortOrder;
};
