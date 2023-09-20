import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { IntegrationIntegrationTypeListRelationFilter } from "../integrationIntegrationType/IntegrationIntegrationTypeListRelationFilter";
import { TagIntegrationListRelationFilter } from "../tagIntegration/TagIntegrationListRelationFilter";

export type IntegrationWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  imgSrc?: StringNullableFilter;
  isComingSoon?: BooleanFilter;
  isPaid?: BooleanFilter;
  version?: StringNullableFilter;
  docUrl?: StringNullableFilter;
  isFreeTrial?: BooleanFilter;
  freeTrialPeriod?: DecimalNullableFilter;
  order?: IntNullableFilter;
  integrationIntegrationType?: IntegrationIntegrationTypeListRelationFilter;
  tagIntegration?: TagIntegrationListRelationFilter;
};
