import { IntegrationTypeWhereInput } from "./IntegrationTypeWhereInput";
import { IntegrationTypeOrderByInput } from "./IntegrationTypeOrderByInput";

export type IntegrationTypeFindManyArgs = {
  where?: IntegrationTypeWhereInput;
  orderBy?: Array<IntegrationTypeOrderByInput>;
  skip?: number;
  take?: number;
};
