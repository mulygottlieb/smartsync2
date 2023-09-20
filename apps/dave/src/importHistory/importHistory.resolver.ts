import * as graphql from "@nestjs/graphql";
import { ImportHistoryResolverBase } from "./base/importHistory.resolver.base";
import { ImportHistory } from "./base/ImportHistory";
import { ImportHistoryService } from "./importHistory.service";

@graphql.Resolver(() => ImportHistory)
export class ImportHistoryResolver extends ImportHistoryResolverBase {
  constructor(protected readonly service: ImportHistoryService) {
    super(service);
  }
}
