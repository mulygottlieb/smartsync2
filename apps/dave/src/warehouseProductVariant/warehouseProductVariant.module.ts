import { Module } from "@nestjs/common";
import { WarehouseProductVariantModuleBase } from "./base/warehouseProductVariant.module.base";
import { WarehouseProductVariantService } from "./warehouseProductVariant.service";
import { WarehouseProductVariantController } from "./warehouseProductVariant.controller";
import { WarehouseProductVariantResolver } from "./warehouseProductVariant.resolver";

@Module({
  imports: [WarehouseProductVariantModuleBase],
  controllers: [WarehouseProductVariantController],
  providers: [WarehouseProductVariantService, WarehouseProductVariantResolver],
  exports: [WarehouseProductVariantService],
})
export class WarehouseProductVariantModule {}
