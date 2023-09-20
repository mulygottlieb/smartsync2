import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagProductUpdateInput = {
  product?: ProductWhereUniqueInput;
  tag?: TagWhereUniqueInput;
};
