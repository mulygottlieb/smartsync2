import { Module } from "@nestjs/common";
import { ProductOptionGroupModuleBase } from "./base/productOptionGroup.module.base";
import { ProductOptionGroupService } from "./productOptionGroup.service";
import { ProductOptionGroupController } from "./productOptionGroup.controller";
import { ProductOptionGroupResolver } from "./productOptionGroup.resolver";

@Module({
  imports: [ProductOptionGroupModuleBase],
  controllers: [ProductOptionGroupController],
  providers: [ProductOptionGroupService, ProductOptionGroupResolver],
  exports: [ProductOptionGroupService],
})
export class ProductOptionGroupModule {}
