import * as graphql from "@nestjs/graphql";
import { ChangelogResolverBase } from "./base/changelog.resolver.base";
import { Changelog } from "./base/Changelog";
import { ChangelogService } from "./changelog.service";

@graphql.Resolver(() => Changelog)
export class ChangelogResolver extends ChangelogResolverBase {
  constructor(protected readonly service: ChangelogService) {
    super(service);
  }
}
