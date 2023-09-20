import * as graphql from "@nestjs/graphql";
import { OrganizationEmploymentTypeResolverBase } from "./base/organizationEmploymentType.resolver.base";
import { OrganizationEmploymentType } from "./base/OrganizationEmploymentType";
import { OrganizationEmploymentTypeService } from "./organizationEmploymentType.service";

@graphql.Resolver(() => OrganizationEmploymentType)
export class OrganizationEmploymentTypeResolver extends OrganizationEmploymentTypeResolverBase {
  constructor(protected readonly service: OrganizationEmploymentTypeService) {
    super(service);
  }
}
