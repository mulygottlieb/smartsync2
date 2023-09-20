import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TagCandidateService } from "./tagCandidate.service";
import { TagCandidateControllerBase } from "./base/tagCandidate.controller.base";

@swagger.ApiTags("tagCandidates")
@common.Controller("tagCandidates")
export class TagCandidateController extends TagCandidateControllerBase {
  constructor(protected readonly service: TagCandidateService) {
    super(service);
  }
}
