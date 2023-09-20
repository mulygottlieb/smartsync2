import * as graphql from "@nestjs/graphql";
import { PipelineStageResolverBase } from "./base/pipelineStage.resolver.base";
import { PipelineStage } from "./base/PipelineStage";
import { PipelineStageService } from "./pipelineStage.service";

@graphql.Resolver(() => PipelineStage)
export class PipelineStageResolver extends PipelineStageResolverBase {
  constructor(protected readonly service: PipelineStageService) {
    super(service);
  }
}
