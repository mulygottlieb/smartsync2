import * as graphql from "@nestjs/graphql";
import { TagRequestApprovalResolverBase } from "./base/tagRequestApproval.resolver.base";
import { TagRequestApproval } from "./base/TagRequestApproval";
import { TagRequestApprovalService } from "./tagRequestApproval.service";

@graphql.Resolver(() => TagRequestApproval)
export class TagRequestApprovalResolver extends TagRequestApprovalResolverBase {
  constructor(protected readonly service: TagRequestApprovalService) {
    super(service);
  }
}
