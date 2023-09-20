import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TagInvoiceService } from "./tagInvoice.service";
import { TagInvoiceControllerBase } from "./base/tagInvoice.controller.base";

@swagger.ApiTags("tagInvoices")
@common.Controller("tagInvoices")
export class TagInvoiceController extends TagInvoiceControllerBase {
  constructor(protected readonly service: TagInvoiceService) {
    super(service);
  }
}
