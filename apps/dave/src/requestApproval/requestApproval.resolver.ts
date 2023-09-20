import * as graphql from "@nestjs/graphql";
import { RequestApprovalResolverBase } from "./base/requestApproval.resolver.base";
import { RequestApproval } from "./base/RequestApproval";
import { RequestApprovalService } from "./requestApproval.service";

@graphql.Resolver(() => RequestApproval)
export class RequestApprovalResolver extends RequestApprovalResolverBase {
  constructor(protected readonly service: RequestApprovalService) {
    super(service);
  }
}
