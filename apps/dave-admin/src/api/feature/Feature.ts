import { FeatureOrganization } from "../featureOrganization/FeatureOrganization";

export type Feature = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  code: string;
  isPaid: boolean;
  description: string | null;
  image: string | null;
  link: string;
  status: string | null;
  icon: string | null;
  feature?: Feature | null;
  otherFeature?: Array<Feature>;
  featureOrganization?: Array<FeatureOrganization>;
};
