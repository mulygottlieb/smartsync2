import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { IntegrationEntitySettingWhereUniqueInput } from "../integrationEntitySetting/IntegrationEntitySettingWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type IntegrationEntitySettingTiedWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  entity?: StringFilter;
  sync?: BooleanFilter;
  integrationEntitySetting?: IntegrationEntitySettingWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
};
