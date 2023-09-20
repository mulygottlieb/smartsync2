import { Module } from "@nestjs/common";
import { ProductOptionGroupTranslationModuleBase } from "./base/productOptionGroupTranslation.module.base";
import { ProductOptionGroupTranslationService } from "./productOptionGroupTranslation.service";
import { ProductOptionGroupTranslationController } from "./productOptionGroupTranslation.controller";
import { ProductOptionGroupTranslationResolver } from "./productOptionGroupTranslation.resolver";

@Module({
  imports: [ProductOptionGroupTranslationModuleBase],
  controllers: [ProductOptionGroupTranslationController],
  providers: [
    ProductOptionGroupTranslationService,
    ProductOptionGroupTranslationResolver,
  ],
  exports: [ProductOptionGroupTranslationService],
})
export class ProductOptionGroupTranslationModule {}
