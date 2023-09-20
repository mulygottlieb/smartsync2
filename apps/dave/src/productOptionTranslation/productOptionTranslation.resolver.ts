import * as graphql from "@nestjs/graphql";
import { ProductOptionTranslationResolverBase } from "./base/productOptionTranslation.resolver.base";
import { ProductOptionTranslation } from "./base/ProductOptionTranslation";
import { ProductOptionTranslationService } from "./productOptionTranslation.service";

@graphql.Resolver(() => ProductOptionTranslation)
export class ProductOptionTranslationResolver extends ProductOptionTranslationResolverBase {
  constructor(protected readonly service: ProductOptionTranslationService) {
    super(service);
  }
}
