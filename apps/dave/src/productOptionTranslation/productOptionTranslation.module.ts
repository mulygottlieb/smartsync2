import { Module } from "@nestjs/common";
import { ProductOptionTranslationModuleBase } from "./base/productOptionTranslation.module.base";
import { ProductOptionTranslationService } from "./productOptionTranslation.service";
import { ProductOptionTranslationController } from "./productOptionTranslation.controller";
import { ProductOptionTranslationResolver } from "./productOptionTranslation.resolver";

@Module({
  imports: [ProductOptionTranslationModuleBase],
  controllers: [ProductOptionTranslationController],
  providers: [
    ProductOptionTranslationService,
    ProductOptionTranslationResolver,
  ],
  exports: [ProductOptionTranslationService],
})
export class ProductOptionTranslationModule {}
