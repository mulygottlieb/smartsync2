import { Module } from "@nestjs/common";
import { KeyResultTemplateModuleBase } from "./base/keyResultTemplate.module.base";
import { KeyResultTemplateService } from "./keyResultTemplate.service";
import { KeyResultTemplateController } from "./keyResultTemplate.controller";
import { KeyResultTemplateResolver } from "./keyResultTemplate.resolver";

@Module({
  imports: [KeyResultTemplateModuleBase],
  controllers: [KeyResultTemplateController],
  providers: [KeyResultTemplateService, KeyResultTemplateResolver],
  exports: [KeyResultTemplateService],
})
export class KeyResultTemplateModule {}
