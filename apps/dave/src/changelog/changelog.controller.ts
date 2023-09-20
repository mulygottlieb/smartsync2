import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ChangelogService } from "./changelog.service";
import { ChangelogControllerBase } from "./base/changelog.controller.base";

@swagger.ApiTags("changelogs")
@common.Controller("changelogs")
export class ChangelogController extends ChangelogControllerBase {
  constructor(protected readonly service: ChangelogService) {
    super(service);
  }
}
