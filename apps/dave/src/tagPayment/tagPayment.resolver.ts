import * as graphql from "@nestjs/graphql";
import { TagPaymentResolverBase } from "./base/tagPayment.resolver.base";
import { TagPayment } from "./base/TagPayment";
import { TagPaymentService } from "./tagPayment.service";

@graphql.Resolver(() => TagPayment)
export class TagPaymentResolver extends TagPaymentResolverBase {
  constructor(protected readonly service: TagPaymentService) {
    super(service);
  }
}
