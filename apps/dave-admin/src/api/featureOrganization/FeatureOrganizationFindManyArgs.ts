import { FeatureOrganizationWhereInput } from "./FeatureOrganizationWhereInput";
import { FeatureOrganizationOrderByInput } from "./FeatureOrganizationOrderByInput";

export type FeatureOrganizationFindManyArgs = {
  where?: FeatureOrganizationWhereInput;
  orderBy?: Array<FeatureOrganizationOrderByInput>;
  skip?: number;
  take?: number;
};
