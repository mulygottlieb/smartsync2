import * as graphql from "@nestjs/graphql";
import { ProductTranslationResolverBase } from "./base/productTranslation.resolver.base";
import { ProductTranslation } from "./base/ProductTranslation";
import { ProductTranslationService } from "./productTranslation.service";

@graphql.Resolver(() => ProductTranslation)
export class ProductTranslationResolver extends ProductTranslationResolverBase {
  constructor(protected readonly service: ProductTranslationService) {
    super(service);
  }
}
