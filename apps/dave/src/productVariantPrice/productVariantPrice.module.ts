import { Module } from "@nestjs/common";
import { ProductVariantPriceModuleBase } from "./base/productVariantPrice.module.base";
import { ProductVariantPriceService } from "./productVariantPrice.service";
import { ProductVariantPriceController } from "./productVariantPrice.controller";
import { ProductVariantPriceResolver } from "./productVariantPrice.resolver";

@Module({
  imports: [ProductVariantPriceModuleBase],
  controllers: [ProductVariantPriceController],
  providers: [ProductVariantPriceService, ProductVariantPriceResolver],
  exports: [ProductVariantPriceService],
})
export class ProductVariantPriceModule {}
