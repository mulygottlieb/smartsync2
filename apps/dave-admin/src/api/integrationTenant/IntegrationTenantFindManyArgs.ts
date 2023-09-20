import { IntegrationTenantWhereInput } from "./IntegrationTenantWhereInput";
import { IntegrationTenantOrderByInput } from "./IntegrationTenantOrderByInput";

export type IntegrationTenantFindManyArgs = {
  where?: IntegrationTenantWhereInput;
  orderBy?: Array<IntegrationTenantOrderByInput>;
  skip?: number;
  take?: number;
};
