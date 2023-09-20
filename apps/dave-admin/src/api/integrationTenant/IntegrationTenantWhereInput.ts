import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { IntegrationEntitySettingListRelationFilter } from "../integrationEntitySetting/IntegrationEntitySettingListRelationFilter";
import { IntegrationMapListRelationFilter } from "../integrationMap/IntegrationMapListRelationFilter";
import { IntegrationSettingListRelationFilter } from "../integrationSetting/IntegrationSettingListRelationFilter";

export type IntegrationTenantWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  tenant?: TenantWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  integrationEntitySetting?: IntegrationEntitySettingListRelationFilter;
  integrationMap?: IntegrationMapListRelationFilter;
  integrationSetting?: IntegrationSettingListRelationFilter;
};
