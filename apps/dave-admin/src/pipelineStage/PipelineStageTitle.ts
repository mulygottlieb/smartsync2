import { PipelineStage as TPipelineStage } from "../api/pipelineStage/PipelineStage";

export const PIPELINESTAGE_TITLE_FIELD = "name";

export const PipelineStageTitle = (record: TPipelineStage): string => {
  return record.name?.toString() || String(record.id);
};
