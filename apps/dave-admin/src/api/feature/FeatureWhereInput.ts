import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FeatureWhereUniqueInput } from "./FeatureWhereUniqueInput";
import { FeatureListRelationFilter } from "./FeatureListRelationFilter";
import { FeatureOrganizationListRelationFilter } from "../featureOrganization/FeatureOrganizationListRelationFilter";

export type FeatureWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  code?: StringFilter;
  isPaid?: BooleanFilter;
  description?: StringNullableFilter;
  image?: StringNullableFilter;
  link?: StringFilter;
  status?: StringNullableFilter;
  icon?: StringNullableFilter;
  feature?: FeatureWhereUniqueInput;
  otherFeature?: FeatureListRelationFilter;
  featureOrganization?: FeatureOrganizationListRelationFilter;
};
