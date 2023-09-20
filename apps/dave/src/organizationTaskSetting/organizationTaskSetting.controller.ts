import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrganizationTaskSettingService } from "./organizationTaskSetting.service";
import { OrganizationTaskSettingControllerBase } from "./base/organizationTaskSetting.controller.base";

@swagger.ApiTags("organizationTaskSettings")
@common.Controller("organizationTaskSettings")
export class OrganizationTaskSettingController extends OrganizationTaskSettingControllerBase {
  constructor(protected readonly service: OrganizationTaskSettingService) {
    super(service);
  }
}
