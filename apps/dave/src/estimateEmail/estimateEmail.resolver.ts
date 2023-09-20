import * as graphql from "@nestjs/graphql";
import { EstimateEmailResolverBase } from "./base/estimateEmail.resolver.base";
import { EstimateEmail } from "./base/EstimateEmail";
import { EstimateEmailService } from "./estimateEmail.service";

@graphql.Resolver(() => EstimateEmail)
export class EstimateEmailResolver extends EstimateEmailResolverBase {
  constructor(protected readonly service: EstimateEmailService) {
    super(service);
  }
}
