import { PipelineStageWhereInput } from "./PipelineStageWhereInput";
import { PipelineStageOrderByInput } from "./PipelineStageOrderByInput";

export type PipelineStageFindManyArgs = {
  where?: PipelineStageWhereInput;
  orderBy?: Array<PipelineStageOrderByInput>;
  skip?: number;
  take?: number;
};
