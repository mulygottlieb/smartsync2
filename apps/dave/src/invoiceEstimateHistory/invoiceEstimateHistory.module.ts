import { Module } from "@nestjs/common";
import { InvoiceEstimateHistoryModuleBase } from "./base/invoiceEstimateHistory.module.base";
import { InvoiceEstimateHistoryService } from "./invoiceEstimateHistory.service";
import { InvoiceEstimateHistoryController } from "./invoiceEstimateHistory.controller";
import { InvoiceEstimateHistoryResolver } from "./invoiceEstimateHistory.resolver";

@Module({
  imports: [InvoiceEstimateHistoryModuleBase],
  controllers: [InvoiceEstimateHistoryController],
  providers: [InvoiceEstimateHistoryService, InvoiceEstimateHistoryResolver],
  exports: [InvoiceEstimateHistoryService],
})
export class InvoiceEstimateHistoryModule {}
