import { Module } from "@nestjs/common";
import { ProductTranslationModuleBase } from "./base/productTranslation.module.base";
import { ProductTranslationService } from "./productTranslation.service";
import { ProductTranslationController } from "./productTranslation.controller";
import { ProductTranslationResolver } from "./productTranslation.resolver";

@Module({
  imports: [ProductTranslationModuleBase],
  controllers: [ProductTranslationController],
  providers: [ProductTranslationService, ProductTranslationResolver],
  exports: [ProductTranslationService],
})
export class ProductTranslationModule {}
