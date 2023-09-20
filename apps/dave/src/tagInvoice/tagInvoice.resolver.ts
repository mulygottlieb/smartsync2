import * as graphql from "@nestjs/graphql";
import { TagInvoiceResolverBase } from "./base/tagInvoice.resolver.base";
import { TagInvoice } from "./base/TagInvoice";
import { TagInvoiceService } from "./tagInvoice.service";

@graphql.Resolver(() => TagInvoice)
export class TagInvoiceResolver extends TagInvoiceResolverBase {
  constructor(protected readonly service: TagInvoiceService) {
    super(service);
  }
}
