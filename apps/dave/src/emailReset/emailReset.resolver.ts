import * as graphql from "@nestjs/graphql";
import { EmailResetResolverBase } from "./base/emailReset.resolver.base";
import { EmailReset } from "./base/EmailReset";
import { EmailResetService } from "./emailReset.service";

@graphql.Resolver(() => EmailReset)
export class EmailResetResolver extends EmailResetResolverBase {
  constructor(protected readonly service: EmailResetService) {
    super(service);
  }
}
