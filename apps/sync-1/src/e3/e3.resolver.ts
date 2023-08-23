import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { E3ResolverBase } from "./base/e3.resolver.base";
import { E3 } from "./base/E3";
import { E3Service } from "./e3.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => E3)
export class E3Resolver extends E3ResolverBase {
  constructor(
    protected readonly service: E3Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
