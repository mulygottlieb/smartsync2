import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";
import { IntegrationTenant } from "../integrationTenant/IntegrationTenant";
import { IntegrationEntitySettingTied } from "../integrationEntitySettingTied/IntegrationEntitySettingTied";

export type IntegrationEntitySetting = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  entity: string;
  sync: boolean;
  tenant?: Tenant | null;
  organization?: Organization | null;
  integrationTenant?: IntegrationTenant;
  integrationEntitySettingTied?: Array<IntegrationEntitySettingTied>;
};
