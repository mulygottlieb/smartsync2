import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { IntegrationTenantWhereUniqueInput } from "../integrationTenant/IntegrationTenantWhereUniqueInput";
import { IntegrationEntitySettingTiedCreateNestedManyWithoutIntegrationEntitySettingsInput } from "./IntegrationEntitySettingTiedCreateNestedManyWithoutIntegrationEntitySettingsInput";

export type IntegrationEntitySettingCreateInput = {
  entity: string;
  sync: boolean;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  integrationTenant: IntegrationTenantWhereUniqueInput;
  integrationEntitySettingTied?: IntegrationEntitySettingTiedCreateNestedManyWithoutIntegrationEntitySettingsInput;
};
