import * as graphql from "@nestjs/graphql";
import { ProductCategoryTranslationResolverBase } from "./base/productCategoryTranslation.resolver.base";
import { ProductCategoryTranslation } from "./base/ProductCategoryTranslation";
import { ProductCategoryTranslationService } from "./productCategoryTranslation.service";

@graphql.Resolver(() => ProductCategoryTranslation)
export class ProductCategoryTranslationResolver extends ProductCategoryTranslationResolverBase {
  constructor(protected readonly service: ProductCategoryTranslationService) {
    super(service);
  }
}
