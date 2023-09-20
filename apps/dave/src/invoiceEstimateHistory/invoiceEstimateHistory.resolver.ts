import * as graphql from "@nestjs/graphql";
import { InvoiceEstimateHistoryResolverBase } from "./base/invoiceEstimateHistory.resolver.base";
import { InvoiceEstimateHistory } from "./base/InvoiceEstimateHistory";
import { InvoiceEstimateHistoryService } from "./invoiceEstimateHistory.service";

@graphql.Resolver(() => InvoiceEstimateHistory)
export class InvoiceEstimateHistoryResolver extends InvoiceEstimateHistoryResolverBase {
  constructor(protected readonly service: InvoiceEstimateHistoryService) {
    super(service);
  }
}
