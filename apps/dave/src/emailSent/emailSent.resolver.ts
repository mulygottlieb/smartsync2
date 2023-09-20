import * as graphql from "@nestjs/graphql";
import { EmailSentResolverBase } from "./base/emailSent.resolver.base";
import { EmailSent } from "./base/EmailSent";
import { EmailSentService } from "./emailSent.service";

@graphql.Resolver(() => EmailSent)
export class EmailSentResolver extends EmailSentResolverBase {
  constructor(protected readonly service: EmailSentService) {
    super(service);
  }
}
