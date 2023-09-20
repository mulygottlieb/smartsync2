import * as graphql from "@nestjs/graphql";
import { ProductOptionResolverBase } from "./base/productOption.resolver.base";
import { ProductOption } from "./base/ProductOption";
import { ProductOptionService } from "./productOption.service";

@graphql.Resolver(() => ProductOption)
export class ProductOptionResolver extends ProductOptionResolverBase {
  constructor(protected readonly service: ProductOptionService) {
    super(service);
  }
}
