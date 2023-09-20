import { Module } from "@nestjs/common";
import { ProductVariantSettingModuleBase } from "./base/productVariantSetting.module.base";
import { ProductVariantSettingService } from "./productVariantSetting.service";
import { ProductVariantSettingController } from "./productVariantSetting.controller";
import { ProductVariantSettingResolver } from "./productVariantSetting.resolver";

@Module({
  imports: [ProductVariantSettingModuleBase],
  controllers: [ProductVariantSettingController],
  providers: [ProductVariantSettingService, ProductVariantSettingResolver],
  exports: [ProductVariantSettingService],
})
export class ProductVariantSettingModule {}
