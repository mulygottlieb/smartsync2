import { Module } from "@nestjs/common";
import { ProductTypeModuleBase } from "./base/productType.module.base";
import { ProductTypeService } from "./productType.service";
import { ProductTypeController } from "./productType.controller";
import { ProductTypeResolver } from "./productType.resolver";

@Module({
  imports: [ProductTypeModuleBase],
  controllers: [ProductTypeController],
  providers: [ProductTypeService, ProductTypeResolver],
  exports: [ProductTypeService],
})
export class ProductTypeModule {}
