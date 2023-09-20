import * as graphql from "@nestjs/graphql";
import { KeyResultTemplateResolverBase } from "./base/keyResultTemplate.resolver.base";
import { KeyResultTemplate } from "./base/KeyResultTemplate";
import { KeyResultTemplateService } from "./keyResultTemplate.service";

@graphql.Resolver(() => KeyResultTemplate)
export class KeyResultTemplateResolver extends KeyResultTemplateResolverBase {
  constructor(protected readonly service: KeyResultTemplateService) {
    super(service);
  }
}
