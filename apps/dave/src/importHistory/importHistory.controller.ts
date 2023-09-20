import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ImportHistoryService } from "./importHistory.service";
import { ImportHistoryControllerBase } from "./base/importHistory.controller.base";

@swagger.ApiTags("importHistories")
@common.Controller("importHistories")
export class ImportHistoryController extends ImportHistoryControllerBase {
  constructor(protected readonly service: ImportHistoryService) {
    super(service);
  }
}
