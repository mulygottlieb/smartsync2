import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TagPaymentService } from "./tagPayment.service";
import { TagPaymentControllerBase } from "./base/tagPayment.controller.base";

@swagger.ApiTags("tagPayments")
@common.Controller("tagPayments")
export class TagPaymentController extends TagPaymentControllerBase {
  constructor(protected readonly service: TagPaymentService) {
    super(service);
  }
}
