import * as graphql from "@nestjs/graphql";
import { TagOrganizationProjectResolverBase } from "./base/tagOrganizationProject.resolver.base";
import { TagOrganizationProject } from "./base/TagOrganizationProject";
import { TagOrganizationProjectService } from "./tagOrganizationProject.service";

@graphql.Resolver(() => TagOrganizationProject)
export class TagOrganizationProjectResolver extends TagOrganizationProjectResolverBase {
  constructor(protected readonly service: TagOrganizationProjectService) {
    super(service);
  }
}
