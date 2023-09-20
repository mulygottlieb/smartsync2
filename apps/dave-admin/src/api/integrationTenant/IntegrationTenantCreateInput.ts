import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { IntegrationEntitySettingCreateNestedManyWithoutIntegrationTenantsInput } from "./IntegrationEntitySettingCreateNestedManyWithoutIntegrationTenantsInput";
import { IntegrationMapCreateNestedManyWithoutIntegrationTenantsInput } from "./IntegrationMapCreateNestedManyWithoutIntegrationTenantsInput";
import { IntegrationSettingCreateNestedManyWithoutIntegrationTenantsInput } from "./IntegrationSettingCreateNestedManyWithoutIntegrationTenantsInput";

export type IntegrationTenantCreateInput = {
  name: string;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  integrationEntitySetting?: IntegrationEntitySettingCreateNestedManyWithoutIntegrationTenantsInput;
  integrationMap?: IntegrationMapCreateNestedManyWithoutIntegrationTenantsInput;
  integrationSetting?: IntegrationSettingCreateNestedManyWithoutIntegrationTenantsInput;
};
