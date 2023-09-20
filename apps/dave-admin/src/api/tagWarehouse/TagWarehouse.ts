import { Warehouse } from "../warehouse/Warehouse";
import { Tag } from "../tag/Tag";

export type TagWarehouse = {
  warehouse?: Warehouse;
  tag?: Tag;
  id: string;
};
