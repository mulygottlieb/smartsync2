import * as graphql from "@nestjs/graphql";
import { ApprovalPolicyResolverBase } from "./base/approvalPolicy.resolver.base";
import { ApprovalPolicy } from "./base/ApprovalPolicy";
import { ApprovalPolicyService } from "./approvalPolicy.service";

@graphql.Resolver(() => ApprovalPolicy)
export class ApprovalPolicyResolver extends ApprovalPolicyResolverBase {
  constructor(protected readonly service: ApprovalPolicyService) {
    super(service);
  }
}
