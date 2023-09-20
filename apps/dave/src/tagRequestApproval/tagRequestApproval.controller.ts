import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TagRequestApprovalService } from "./tagRequestApproval.service";
import { TagRequestApprovalControllerBase } from "./base/tagRequestApproval.controller.base";

@swagger.ApiTags("tagRequestApprovals")
@common.Controller("tagRequestApprovals")
export class TagRequestApprovalController extends TagRequestApprovalControllerBase {
  constructor(protected readonly service: TagRequestApprovalService) {
    super(service);
  }
}
