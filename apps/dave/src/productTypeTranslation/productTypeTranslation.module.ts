import { Module } from "@nestjs/common";
import { ProductTypeTranslationModuleBase } from "./base/productTypeTranslation.module.base";
import { ProductTypeTranslationService } from "./productTypeTranslation.service";
import { ProductTypeTranslationController } from "./productTypeTranslation.controller";
import { ProductTypeTranslationResolver } from "./productTypeTranslation.resolver";

@Module({
  imports: [ProductTypeTranslationModuleBase],
  controllers: [ProductTypeTranslationController],
  providers: [ProductTypeTranslationService, ProductTypeTranslationResolver],
  exports: [ProductTypeTranslationService],
})
export class ProductTypeTranslationModule {}
