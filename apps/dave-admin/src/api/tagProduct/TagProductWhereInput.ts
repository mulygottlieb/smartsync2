import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TagProductWhereInput = {
  product?: ProductWhereUniqueInput;
  tag?: TagWhereUniqueInput;
  id?: StringFilter;
};
