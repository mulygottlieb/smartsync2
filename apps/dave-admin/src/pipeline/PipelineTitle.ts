import { Pipeline as TPipeline } from "../api/pipeline/Pipeline";

export const PIPELINE_TITLE_FIELD = "name";

export const PipelineTitle = (record: TPipeline): string => {
  return record.name?.toString() || String(record.id);
};
