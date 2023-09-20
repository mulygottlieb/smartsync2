import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type EstimateEmailWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  token?: StringFilter;
  email?: StringFilter;
  expireDate?: DateTimeFilter;
  convertAcceptedEstimates?: BooleanNullableFilter;
  organization?: OrganizationWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
};
