import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";
import { IntegrationEntitySetting } from "../integrationEntitySetting/IntegrationEntitySetting";
import { IntegrationMap } from "../integrationMap/IntegrationMap";
import { IntegrationSetting } from "../integrationSetting/IntegrationSetting";

export type IntegrationTenant = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  tenant?: Tenant | null;
  organization?: Organization | null;
  integrationEntitySetting?: Array<IntegrationEntitySetting>;
  integrationMap?: Array<IntegrationMap>;
  integrationSetting?: Array<IntegrationSetting>;
};
