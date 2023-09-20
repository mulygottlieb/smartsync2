import { FeatureWhereUniqueInput } from "./FeatureWhereUniqueInput";
import { FeatureUpdateManyWithoutFeaturesInput } from "./FeatureUpdateManyWithoutFeaturesInput";
import { FeatureOrganizationUpdateManyWithoutFeaturesInput } from "./FeatureOrganizationUpdateManyWithoutFeaturesInput";

export type FeatureUpdateInput = {
  name?: string;
  code?: string;
  isPaid?: boolean;
  description?: string | null;
  image?: string | null;
  link?: string;
  status?: string | null;
  icon?: string | null;
  feature?: FeatureWhereUniqueInput | null;
  otherFeature?: FeatureUpdateManyWithoutFeaturesInput;
  featureOrganization?: FeatureOrganizationUpdateManyWithoutFeaturesInput;
};
