import * as graphql from "@nestjs/graphql";
import { ProductVariantSettingResolverBase } from "./base/productVariantSetting.resolver.base";
import { ProductVariantSetting } from "./base/ProductVariantSetting";
import { ProductVariantSettingService } from "./productVariantSetting.service";

@graphql.Resolver(() => ProductVariantSetting)
export class ProductVariantSettingResolver extends ProductVariantSettingResolverBase {
  constructor(protected readonly service: ProductVariantSettingService) {
    super(service);
  }
}
