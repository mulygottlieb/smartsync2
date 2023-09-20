import * as graphql from "@nestjs/graphql";
import { RequestApprovalTeamResolverBase } from "./base/requestApprovalTeam.resolver.base";
import { RequestApprovalTeam } from "./base/RequestApprovalTeam";
import { RequestApprovalTeamService } from "./requestApprovalTeam.service";

@graphql.Resolver(() => RequestApprovalTeam)
export class RequestApprovalTeamResolver extends RequestApprovalTeamResolverBase {
  constructor(protected readonly service: RequestApprovalTeamService) {
    super(service);
  }
}
