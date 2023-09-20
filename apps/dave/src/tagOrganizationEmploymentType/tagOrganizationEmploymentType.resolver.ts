import * as graphql from "@nestjs/graphql";
import { TagOrganizationEmploymentTypeResolverBase } from "./base/tagOrganizationEmploymentType.resolver.base";
import { TagOrganizationEmploymentType } from "./base/TagOrganizationEmploymentType";
import { TagOrganizationEmploymentTypeService } from "./tagOrganizationEmploymentType.service";

@graphql.Resolver(() => TagOrganizationEmploymentType)
export class TagOrganizationEmploymentTypeResolver extends TagOrganizationEmploymentTypeResolverBase {
  constructor(
    protected readonly service: TagOrganizationEmploymentTypeService
  ) {
    super(service);
  }
}
