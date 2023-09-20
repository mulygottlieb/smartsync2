import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagProductCreateInput = {
  product: ProductWhereUniqueInput;
  tag: TagWhereUniqueInput;
};
