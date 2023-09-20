import * as graphql from "@nestjs/graphql";
import { TagMerchantResolverBase } from "./base/tagMerchant.resolver.base";
import { TagMerchant } from "./base/TagMerchant";
import { TagMerchantService } from "./tagMerchant.service";

@graphql.Resolver(() => TagMerchant)
export class TagMerchantResolver extends TagMerchantResolverBase {
  constructor(protected readonly service: TagMerchantService) {
    super(service);
  }
}
