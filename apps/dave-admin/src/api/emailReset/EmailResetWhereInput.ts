import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EmailResetWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  email?: StringFilter;
  oldEmail?: StringFilter;
  code?: IntFilter;
  token?: StringNullableFilter;
  expiredAt?: DateTimeNullableFilter;
  tenant?: TenantWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
