import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TagIntegrationService } from "./tagIntegration.service";
import { TagIntegrationControllerBase } from "./base/tagIntegration.controller.base";

@swagger.ApiTags("tagIntegrations")
@common.Controller("tagIntegrations")
export class TagIntegrationController extends TagIntegrationControllerBase {
  constructor(protected readonly service: TagIntegrationService) {
    super(service);
  }
}
