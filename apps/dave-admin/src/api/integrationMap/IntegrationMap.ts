import { Organization } from "../organization/Organization";
import { IntegrationTenant } from "../integrationTenant/IntegrationTenant";
import { Tenant } from "../tenant/Tenant";

export type IntegrationMap = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  entity: string;
  sourceId: bigint;
  gauzyId: string;
  organization?: Organization | null;
  integrationTenant?: IntegrationTenant;
  tenant?: Tenant | null;
};
