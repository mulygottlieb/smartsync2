import { Module } from "@nestjs/common";
import { ProductVariantOptionsProductOptionModuleBase } from "./base/productVariantOptionsProductOption.module.base";
import { ProductVariantOptionsProductOptionService } from "./productVariantOptionsProductOption.service";
import { ProductVariantOptionsProductOptionController } from "./productVariantOptionsProductOption.controller";
import { ProductVariantOptionsProductOptionResolver } from "./productVariantOptionsProductOption.resolver";

@Module({
  imports: [ProductVariantOptionsProductOptionModuleBase],
  controllers: [ProductVariantOptionsProductOptionController],
  providers: [
    ProductVariantOptionsProductOptionService,
    ProductVariantOptionsProductOptionResolver,
  ],
  exports: [ProductVariantOptionsProductOptionService],
})
export class ProductVariantOptionsProductOptionModule {}
