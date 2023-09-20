import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ImportRecordService } from "./importRecord.service";
import { ImportRecordControllerBase } from "./base/importRecord.controller.base";

@swagger.ApiTags("importRecords")
@common.Controller("importRecords")
export class ImportRecordController extends ImportRecordControllerBase {
  constructor(protected readonly service: ImportRecordService) {
    super(service);
  }
}
