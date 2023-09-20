import * as graphql from "@nestjs/graphql";
import { CustomSmtpResolverBase } from "./base/customSmtp.resolver.base";
import { CustomSmtp } from "./base/CustomSmtp";
import { CustomSmtpService } from "./customSmtp.service";

@graphql.Resolver(() => CustomSmtp)
export class CustomSmtpResolver extends CustomSmtpResolverBase {
  constructor(protected readonly service: CustomSmtpService) {
    super(service);
  }
}
