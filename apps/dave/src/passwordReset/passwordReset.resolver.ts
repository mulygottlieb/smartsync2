import * as graphql from "@nestjs/graphql";
import { PasswordResetResolverBase } from "./base/passwordReset.resolver.base";
import { PasswordReset } from "./base/PasswordReset";
import { PasswordResetService } from "./passwordReset.service";

@graphql.Resolver(() => PasswordReset)
export class PasswordResetResolver extends PasswordResetResolverBase {
  constructor(protected readonly service: PasswordResetService) {
    super(service);
  }
}
