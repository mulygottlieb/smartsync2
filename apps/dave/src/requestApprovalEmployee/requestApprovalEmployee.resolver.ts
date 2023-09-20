import * as graphql from "@nestjs/graphql";
import { RequestApprovalEmployeeResolverBase } from "./base/requestApprovalEmployee.resolver.base";
import { RequestApprovalEmployee } from "./base/RequestApprovalEmployee";
import { RequestApprovalEmployeeService } from "./requestApprovalEmployee.service";

@graphql.Resolver(() => RequestApprovalEmployee)
export class RequestApprovalEmployeeResolver extends RequestApprovalEmployeeResolverBase {
  constructor(protected readonly service: RequestApprovalEmployeeService) {
    super(service);
  }
}
