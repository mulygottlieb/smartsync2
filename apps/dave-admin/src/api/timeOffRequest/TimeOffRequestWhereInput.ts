import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { ImageAssetWhereUniqueInput } from "../imageAsset/ImageAssetWhereUniqueInput";
import { TimeOffPolicyWhereUniqueInput } from "../timeOffPolicy/TimeOffPolicyWhereUniqueInput";
import { TimeOffRequestEmployeeListRelationFilter } from "../timeOffRequestEmployee/TimeOffRequestEmployeeListRelationFilter";

export type TimeOffRequestWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  documentUrl?: StringNullableFilter;
  description?: StringNullableFilter;
  start?: DateTimeFilter;
  end?: DateTimeFilter;
  requestDate?: DateTimeFilter;
  status?: StringFilter;
  isHoliday?: BooleanNullableFilter;
  isArchived?: BooleanNullableFilter;
  tenant?: TenantWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  imageAsset?: ImageAssetWhereUniqueInput;
  timeOffPolicy?: TimeOffPolicyWhereUniqueInput;
  timeOffRequestEmployee?: TimeOffRequestEmployeeListRelationFilter;
};
