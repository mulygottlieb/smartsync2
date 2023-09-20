import { IntegrationEntitySettingWhereUniqueInput } from "../integrationEntitySetting/IntegrationEntitySettingWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type IntegrationEntitySettingTiedUpdateInput = {
  entity?: string;
  sync?: boolean;
  integrationEntitySetting?: IntegrationEntitySettingWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
};
