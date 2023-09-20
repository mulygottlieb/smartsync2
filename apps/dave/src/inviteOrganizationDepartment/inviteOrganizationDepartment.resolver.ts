import * as graphql from "@nestjs/graphql";
import { InviteOrganizationDepartmentResolverBase } from "./base/inviteOrganizationDepartment.resolver.base";
import { InviteOrganizationDepartment } from "./base/InviteOrganizationDepartment";
import { InviteOrganizationDepartmentService } from "./inviteOrganizationDepartment.service";

@graphql.Resolver(() => InviteOrganizationDepartment)
export class InviteOrganizationDepartmentResolver extends InviteOrganizationDepartmentResolverBase {
  constructor(protected readonly service: InviteOrganizationDepartmentService) {
    super(service);
  }
}
