import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type E2WhereInput = {
  fld1?: StringNullableFilter;
  fld2?: StringNullableFilter;
  fld3?: StringNullableFilter;
  fld4?: StringNullableFilter;
  id?: StringFilter;
};
