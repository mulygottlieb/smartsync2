import { Module } from "@nestjs/common";
import { WarehouseMerchantModuleBase } from "./base/warehouseMerchant.module.base";
import { WarehouseMerchantService } from "./warehouseMerchant.service";
import { WarehouseMerchantController } from "./warehouseMerchant.controller";
import { WarehouseMerchantResolver } from "./warehouseMerchant.resolver";

@Module({
  imports: [WarehouseMerchantModuleBase],
  controllers: [WarehouseMerchantController],
  providers: [WarehouseMerchantService, WarehouseMerchantResolver],
  exports: [WarehouseMerchantService],
})
export class WarehouseMerchantModule {}
