import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InvoiceEstimateHistoryService } from "./invoiceEstimateHistory.service";
import { InvoiceEstimateHistoryControllerBase } from "./base/invoiceEstimateHistory.controller.base";

@swagger.ApiTags("invoiceEstimateHistories")
@common.Controller("invoiceEstimateHistories")
export class InvoiceEstimateHistoryController extends InvoiceEstimateHistoryControllerBase {
  constructor(protected readonly service: InvoiceEstimateHistoryService) {
    super(service);
  }
}
