import { FeatureWhereUniqueInput } from "./FeatureWhereUniqueInput";
import { FeatureCreateNestedManyWithoutFeaturesInput } from "./FeatureCreateNestedManyWithoutFeaturesInput";
import { FeatureOrganizationCreateNestedManyWithoutFeaturesInput } from "./FeatureOrganizationCreateNestedManyWithoutFeaturesInput";

export type FeatureCreateInput = {
  name: string;
  code: string;
  isPaid: boolean;
  description?: string | null;
  image?: string | null;
  link: string;
  status?: string | null;
  icon?: string | null;
  feature?: FeatureWhereUniqueInput | null;
  otherFeature?: FeatureCreateNestedManyWithoutFeaturesInput;
  featureOrganization?: FeatureOrganizationCreateNestedManyWithoutFeaturesInput;
};
