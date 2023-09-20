import { Module } from "@nestjs/common";
import { TagWarehouseModuleBase } from "./base/tagWarehouse.module.base";
import { TagWarehouseService } from "./tagWarehouse.service";
import { TagWarehouseController } from "./tagWarehouse.controller";
import { TagWarehouseResolver } from "./tagWarehouse.resolver";

@Module({
  imports: [TagWarehouseModuleBase],
  controllers: [TagWarehouseController],
  providers: [TagWarehouseService, TagWarehouseResolver],
  exports: [TagWarehouseService],
})
export class TagWarehouseModule {}
