import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ImportHistoryWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  file?: StringFilter;
  path?: StringFilter;
  size?: IntNullableFilter;
  status?: StringFilter;
  importDate?: DateTimeFilter;
  tenant?: TenantWhereUniqueInput;
};
