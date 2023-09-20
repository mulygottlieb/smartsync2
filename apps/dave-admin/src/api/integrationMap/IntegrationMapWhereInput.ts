import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BigIntFilter } from "../../util/BigIntFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { IntegrationTenantWhereUniqueInput } from "../integrationTenant/IntegrationTenantWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type IntegrationMapWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  entity?: StringFilter;
  sourceId?: BigIntFilter;
  gauzyId?: StringFilter;
  organization?: OrganizationWhereUniqueInput;
  integrationTenant?: IntegrationTenantWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
};
