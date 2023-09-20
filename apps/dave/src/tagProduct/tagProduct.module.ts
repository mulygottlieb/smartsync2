import { Module } from "@nestjs/common";
import { TagProductModuleBase } from "./base/tagProduct.module.base";
import { TagProductService } from "./tagProduct.service";
import { TagProductController } from "./tagProduct.controller";
import { TagProductResolver } from "./tagProduct.resolver";

@Module({
  imports: [TagProductModuleBase],
  controllers: [TagProductController],
  providers: [TagProductService, TagProductResolver],
  exports: [TagProductService],
})
export class TagProductModule {}
