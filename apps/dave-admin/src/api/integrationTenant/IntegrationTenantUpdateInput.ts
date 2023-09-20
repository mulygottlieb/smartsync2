import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { IntegrationEntitySettingUpdateManyWithoutIntegrationTenantsInput } from "./IntegrationEntitySettingUpdateManyWithoutIntegrationTenantsInput";
import { IntegrationMapUpdateManyWithoutIntegrationTenantsInput } from "./IntegrationMapUpdateManyWithoutIntegrationTenantsInput";
import { IntegrationSettingUpdateManyWithoutIntegrationTenantsInput } from "./IntegrationSettingUpdateManyWithoutIntegrationTenantsInput";

export type IntegrationTenantUpdateInput = {
  name?: string;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  integrationEntitySetting?: IntegrationEntitySettingUpdateManyWithoutIntegrationTenantsInput;
  integrationMap?: IntegrationMapUpdateManyWithoutIntegrationTenantsInput;
  integrationSetting?: IntegrationSettingUpdateManyWithoutIntegrationTenantsInput;
};
