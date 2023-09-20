import { IntegrationSettingWhereInput } from "./IntegrationSettingWhereInput";
import { IntegrationSettingOrderByInput } from "./IntegrationSettingOrderByInput";

export type IntegrationSettingFindManyArgs = {
  where?: IntegrationSettingWhereInput;
  orderBy?: Array<IntegrationSettingOrderByInput>;
  skip?: number;
  take?: number;
};
