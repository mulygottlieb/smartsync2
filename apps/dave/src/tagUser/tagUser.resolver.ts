import * as graphql from "@nestjs/graphql";
import { TagUserResolverBase } from "./base/tagUser.resolver.base";
import { TagUser } from "./base/TagUser";
import { TagUserService } from "./tagUser.service";

@graphql.Resolver(() => TagUser)
export class TagUserResolver extends TagUserResolverBase {
  constructor(protected readonly service: TagUserService) {
    super(service);
  }
}
