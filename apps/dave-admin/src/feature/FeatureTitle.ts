import { Feature as TFeature } from "../api/feature/Feature";

export const FEATURE_TITLE_FIELD = "name";

export const FeatureTitle = (record: TFeature): string => {
  return record.name?.toString() || String(record.id);
};
