import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { IntegrationTenantWhereUniqueInput } from "../integrationTenant/IntegrationTenantWhereUniqueInput";
import { IntegrationEntitySettingTiedListRelationFilter } from "../integrationEntitySettingTied/IntegrationEntitySettingTiedListRelationFilter";

export type IntegrationEntitySettingWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  entity?: StringFilter;
  sync?: BooleanFilter;
  tenant?: TenantWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  integrationTenant?: IntegrationTenantWhereUniqueInput;
  integrationEntitySettingTied?: IntegrationEntitySettingTiedListRelationFilter;
};
