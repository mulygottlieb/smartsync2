import * as graphql from "@nestjs/graphql";
import { IssueTypeResolverBase } from "./base/issueType.resolver.base";
import { IssueType } from "./base/IssueType";
import { IssueTypeService } from "./issueType.service";

@graphql.Resolver(() => IssueType)
export class IssueTypeResolver extends IssueTypeResolverBase {
  constructor(protected readonly service: IssueTypeService) {
    super(service);
  }
}
