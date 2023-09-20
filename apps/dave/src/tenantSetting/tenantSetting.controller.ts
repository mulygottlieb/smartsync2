import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TenantSettingService } from "./tenantSetting.service";
import { TenantSettingControllerBase } from "./base/tenantSetting.controller.base";

@swagger.ApiTags("tenantSettings")
@common.Controller("tenantSettings")
export class TenantSettingController extends TenantSettingControllerBase {
  constructor(protected readonly service: TenantSettingService) {
    super(service);
  }
}
