import * as graphql from "@nestjs/graphql";
import { OrganizationVendorResolverBase } from "./base/organizationVendor.resolver.base";
import { OrganizationVendor } from "./base/OrganizationVendor";
import { OrganizationVendorService } from "./organizationVendor.service";

@graphql.Resolver(() => OrganizationVendor)
export class OrganizationVendorResolver extends OrganizationVendorResolverBase {
  constructor(protected readonly service: OrganizationVendorService) {
    super(service);
  }
}
