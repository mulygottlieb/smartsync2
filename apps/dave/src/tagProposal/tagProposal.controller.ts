import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TagProposalService } from "./tagProposal.service";
import { TagProposalControllerBase } from "./base/tagProposal.controller.base";

@swagger.ApiTags("tagProposals")
@common.Controller("tagProposals")
export class TagProposalController extends TagProposalControllerBase {
  constructor(protected readonly service: TagProposalService) {
    super(service);
  }
}
