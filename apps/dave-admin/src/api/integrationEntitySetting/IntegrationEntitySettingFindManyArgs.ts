import { IntegrationEntitySettingWhereInput } from "./IntegrationEntitySettingWhereInput";
import { IntegrationEntitySettingOrderByInput } from "./IntegrationEntitySettingOrderByInput";

export type IntegrationEntitySettingFindManyArgs = {
  where?: IntegrationEntitySettingWhereInput;
  orderBy?: Array<IntegrationEntitySettingOrderByInput>;
  skip?: number;
  take?: number;
};
