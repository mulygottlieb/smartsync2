import * as graphql from "@nestjs/graphql";
import { ProductTypeTranslationResolverBase } from "./base/productTypeTranslation.resolver.base";
import { ProductTypeTranslation } from "./base/ProductTypeTranslation";
import { ProductTypeTranslationService } from "./productTypeTranslation.service";

@graphql.Resolver(() => ProductTypeTranslation)
export class ProductTypeTranslationResolver extends ProductTypeTranslationResolverBase {
  constructor(protected readonly service: ProductTypeTranslationService) {
    super(service);
  }
}
