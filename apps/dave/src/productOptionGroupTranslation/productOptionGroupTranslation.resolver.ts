import * as graphql from "@nestjs/graphql";
import { ProductOptionGroupTranslationResolverBase } from "./base/productOptionGroupTranslation.resolver.base";
import { ProductOptionGroupTranslation } from "./base/ProductOptionGroupTranslation";
import { ProductOptionGroupTranslationService } from "./productOptionGroupTranslation.service";

@graphql.Resolver(() => ProductOptionGroupTranslation)
export class ProductOptionGroupTranslationResolver extends ProductOptionGroupTranslationResolverBase {
  constructor(
    protected readonly service: ProductOptionGroupTranslationService
  ) {
    super(service);
  }
}
