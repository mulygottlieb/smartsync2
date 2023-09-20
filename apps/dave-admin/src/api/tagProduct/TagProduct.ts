import { Product } from "../product/Product";
import { Tag } from "../tag/Tag";

export type TagProduct = {
  product?: Product;
  tag?: Tag;
  id: string;
};
