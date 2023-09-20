import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { FeatureWhereUniqueInput } from "../feature/FeatureWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type FeatureOrganizationWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  isEnabled?: BooleanFilter;
  organization?: OrganizationWhereUniqueInput;
  feature?: FeatureWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
};
