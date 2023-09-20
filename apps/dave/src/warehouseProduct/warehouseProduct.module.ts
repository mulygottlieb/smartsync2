import { Module } from "@nestjs/common";
import { WarehouseProductModuleBase } from "./base/warehouseProduct.module.base";
import { WarehouseProductService } from "./warehouseProduct.service";
import { WarehouseProductController } from "./warehouseProduct.controller";
import { WarehouseProductResolver } from "./warehouseProduct.resolver";

@Module({
  imports: [WarehouseProductModuleBase],
  controllers: [WarehouseProductController],
  providers: [WarehouseProductService, WarehouseProductResolver],
  exports: [WarehouseProductService],
})
export class WarehouseProductModule {}
