import * as graphql from "@nestjs/graphql";
import { SkillOrganizationResolverBase } from "./base/skillOrganization.resolver.base";
import { SkillOrganization } from "./base/SkillOrganization";
import { SkillOrganizationService } from "./skillOrganization.service";

@graphql.Resolver(() => SkillOrganization)
export class SkillOrganizationResolver extends SkillOrganizationResolverBase {
  constructor(protected readonly service: SkillOrganizationService) {
    super(service);
  }
}
