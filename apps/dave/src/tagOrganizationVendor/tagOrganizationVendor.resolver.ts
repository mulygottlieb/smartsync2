import * as graphql from "@nestjs/graphql";
import { TagOrganizationVendorResolverBase } from "./base/tagOrganizationVendor.resolver.base";
import { TagOrganizationVendor } from "./base/TagOrganizationVendor";
import { TagOrganizationVendorService } from "./tagOrganizationVendor.service";

@graphql.Resolver(() => TagOrganizationVendor)
export class TagOrganizationVendorResolver extends TagOrganizationVendorResolverBase {
  constructor(protected readonly service: TagOrganizationVendorService) {
    super(service);
  }
}
