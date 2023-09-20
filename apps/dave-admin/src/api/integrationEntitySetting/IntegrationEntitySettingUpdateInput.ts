import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { IntegrationTenantWhereUniqueInput } from "../integrationTenant/IntegrationTenantWhereUniqueInput";
import { IntegrationEntitySettingTiedUpdateManyWithoutIntegrationEntitySettingsInput } from "./IntegrationEntitySettingTiedUpdateManyWithoutIntegrationEntitySettingsInput";

export type IntegrationEntitySettingUpdateInput = {
  entity?: string;
  sync?: boolean;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  integrationTenant?: IntegrationTenantWhereUniqueInput;
  integrationEntitySettingTied?: IntegrationEntitySettingTiedUpdateManyWithoutIntegrationEntitySettingsInput;
};
