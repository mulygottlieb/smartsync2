import { Module } from "@nestjs/common";
import { ProductCategoryTranslationModuleBase } from "./base/productCategoryTranslation.module.base";
import { ProductCategoryTranslationService } from "./productCategoryTranslation.service";
import { ProductCategoryTranslationController } from "./productCategoryTranslation.controller";
import { ProductCategoryTranslationResolver } from "./productCategoryTranslation.resolver";

@Module({
  imports: [ProductCategoryTranslationModuleBase],
  controllers: [ProductCategoryTranslationController],
  providers: [
    ProductCategoryTranslationService,
    ProductCategoryTranslationResolver,
  ],
  exports: [ProductCategoryTranslationService],
})
export class ProductCategoryTranslationModule {}
