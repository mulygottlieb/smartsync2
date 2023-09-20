import * as graphql from "@nestjs/graphql";
import { JobPresetResolverBase } from "./base/jobPreset.resolver.base";
import { JobPreset } from "./base/JobPreset";
import { JobPresetService } from "./jobPreset.service";

@graphql.Resolver(() => JobPreset)
export class JobPresetResolver extends JobPresetResolverBase {
  constructor(protected readonly service: JobPresetService) {
    super(service);
  }
}
