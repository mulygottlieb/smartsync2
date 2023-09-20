import * as graphql from "@nestjs/graphql";
import { ProductVariantOptionsProductOptionResolverBase } from "./base/productVariantOptionsProductOption.resolver.base";
import { ProductVariantOptionsProductOption } from "./base/ProductVariantOptionsProductOption";
import { ProductVariantOptionsProductOptionService } from "./productVariantOptionsProductOption.service";

@graphql.Resolver(() => ProductVariantOptionsProductOption)
export class ProductVariantOptionsProductOptionResolver extends ProductVariantOptionsProductOptionResolverBase {
  constructor(
    protected readonly service: ProductVariantOptionsProductOptionService
  ) {
    super(service);
  }
}
