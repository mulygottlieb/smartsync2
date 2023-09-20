import { IntegrationEntitySetting } from "../integrationEntitySetting/IntegrationEntitySetting";
import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";

export type IntegrationEntitySettingTied = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  entity: string;
  sync: boolean;
  integrationEntitySetting?: IntegrationEntitySetting | null;
  tenant?: Tenant | null;
  organization?: Organization | null;
};
