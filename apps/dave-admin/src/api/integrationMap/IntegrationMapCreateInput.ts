import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { IntegrationTenantWhereUniqueInput } from "../integrationTenant/IntegrationTenantWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type IntegrationMapCreateInput = {
  entity: string;
  sourceId: bigint;
  gauzyId: string;
  organization?: OrganizationWhereUniqueInput | null;
  integrationTenant: IntegrationTenantWhereUniqueInput;
  tenant?: TenantWhereUniqueInput | null;
};
