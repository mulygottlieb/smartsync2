import { JobPreset as TJobPreset } from "../api/jobPreset/JobPreset";

export const JOBPRESET_TITLE_FIELD = "name";

export const JobPresetTitle = (record: TJobPreset): string => {
  return record.name?.toString() || String(record.id);
};
