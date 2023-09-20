import { FeatureOrganization as TFeatureOrganization } from "../api/featureOrganization/FeatureOrganization";

export const FEATUREORGANIZATION_TITLE_FIELD = "id";

export const FeatureOrganizationTitle = (
  record: TFeatureOrganization
): string => {
  return record.id?.toString() || String(record.id);
};
