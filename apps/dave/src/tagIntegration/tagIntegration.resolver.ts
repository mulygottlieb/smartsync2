import * as graphql from "@nestjs/graphql";
import { TagIntegrationResolverBase } from "./base/tagIntegration.resolver.base";
import { TagIntegration } from "./base/TagIntegration";
import { TagIntegrationService } from "./tagIntegration.service";

@graphql.Resolver(() => TagIntegration)
export class TagIntegrationResolver extends TagIntegrationResolverBase {
  constructor(protected readonly service: TagIntegrationService) {
    super(service);
  }
}
