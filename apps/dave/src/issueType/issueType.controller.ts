import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IssueTypeService } from "./issueType.service";
import { IssueTypeControllerBase } from "./base/issueType.controller.base";

@swagger.ApiTags("issueTypes")
@common.Controller("issueTypes")
export class IssueTypeController extends IssueTypeControllerBase {
  constructor(protected readonly service: IssueTypeService) {
    super(service);
  }
}
