import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { OrganizationProjectWhereUniqueInput } from "../organizationProject/OrganizationProjectWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { ImageAssetWhereUniqueInput } from "../imageAsset/ImageAssetWhereUniqueInput";
import { OrganizationTeamWhereUniqueInput } from "../organizationTeam/OrganizationTeamWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type IssueTypeWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  value?: StringFilter;
  description?: StringNullableFilter;
  icon?: StringNullableFilter;
  color?: StringNullableFilter;
  isSystem?: BooleanFilter;
  organizationProject?: OrganizationProjectWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  imageAsset?: ImageAssetWhereUniqueInput;
  organizationTeam?: OrganizationTeamWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
};
