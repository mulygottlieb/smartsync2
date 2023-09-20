import { Module } from "@nestjs/common";
import { TagInvoiceModuleBase } from "./base/tagInvoice.module.base";
import { TagInvoiceService } from "./tagInvoice.service";
import { TagInvoiceController } from "./tagInvoice.controller";
import { TagInvoiceResolver } from "./tagInvoice.resolver";

@Module({
  imports: [TagInvoiceModuleBase],
  controllers: [TagInvoiceController],
  providers: [TagInvoiceService, TagInvoiceResolver],
  exports: [TagInvoiceService],
})
export class TagInvoiceModule {}
