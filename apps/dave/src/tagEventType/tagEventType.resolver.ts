import * as graphql from "@nestjs/graphql";
import { TagEventTypeResolverBase } from "./base/tagEventType.resolver.base";
import { TagEventType } from "./base/TagEventType";
import { TagEventTypeService } from "./tagEventType.service";

@graphql.Resolver(() => TagEventType)
export class TagEventTypeResolver extends TagEventTypeResolverBase {
  constructor(protected readonly service: TagEventTypeService) {
    super(service);
  }
}
