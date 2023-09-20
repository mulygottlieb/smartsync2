import * as graphql from "@nestjs/graphql";
import { ProductVariantPriceResolverBase } from "./base/productVariantPrice.resolver.base";
import { ProductVariantPrice } from "./base/ProductVariantPrice";
import { ProductVariantPriceService } from "./productVariantPrice.service";

@graphql.Resolver(() => ProductVariantPrice)
export class ProductVariantPriceResolver extends ProductVariantPriceResolverBase {
  constructor(protected readonly service: ProductVariantPriceService) {
    super(service);
  }
}
