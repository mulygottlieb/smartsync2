import { IntegrationTenant } from "../integrationTenant/IntegrationTenant";
import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";

export type IntegrationSetting = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  settingsName: string;
  settingsValue: string;
  integrationTenant?: IntegrationTenant;
  organization?: Organization | null;
  tenant?: Tenant | null;
};
