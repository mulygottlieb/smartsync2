import { Module } from "@nestjs/common";
import { ProductOptionModuleBase } from "./base/productOption.module.base";
import { ProductOptionService } from "./productOption.service";
import { ProductOptionController } from "./productOption.controller";
import { ProductOptionResolver } from "./productOption.resolver";

@Module({
  imports: [ProductOptionModuleBase],
  controllers: [ProductOptionController],
  providers: [ProductOptionService, ProductOptionResolver],
  exports: [ProductOptionService],
})
export class ProductOptionModule {}
