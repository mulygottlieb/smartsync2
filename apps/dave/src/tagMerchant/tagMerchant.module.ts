import { Module } from "@nestjs/common";
import { TagMerchantModuleBase } from "./base/tagMerchant.module.base";
import { TagMerchantService } from "./tagMerchant.service";
import { TagMerchantController } from "./tagMerchant.controller";
import { TagMerchantResolver } from "./tagMerchant.resolver";

@Module({
  imports: [TagMerchantModuleBase],
  controllers: [TagMerchantController],
  providers: [TagMerchantService, TagMerchantResolver],
  exports: [TagMerchantService],
})
export class TagMerchantModule {}
