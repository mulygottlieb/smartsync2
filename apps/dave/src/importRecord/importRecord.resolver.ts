import * as graphql from "@nestjs/graphql";
import { ImportRecordResolverBase } from "./base/importRecord.resolver.base";
import { ImportRecord } from "./base/ImportRecord";
import { ImportRecordService } from "./importRecord.service";

@graphql.Resolver(() => ImportRecord)
export class ImportRecordResolver extends ImportRecordResolverBase {
  constructor(protected readonly service: ImportRecordService) {
    super(service);
  }
}
