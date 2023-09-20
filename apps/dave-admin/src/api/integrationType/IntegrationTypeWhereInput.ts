import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { IntegrationIntegrationTypeListRelationFilter } from "../integrationIntegrationType/IntegrationIntegrationTypeListRelationFilter";

export type IntegrationTypeWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  groupName?: StringFilter;
  order?: IntFilter;
  integrationIntegrationType?: IntegrationIntegrationTypeListRelationFilter;
};
