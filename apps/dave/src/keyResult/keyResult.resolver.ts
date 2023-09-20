import * as graphql from "@nestjs/graphql";
import { KeyResultResolverBase } from "./base/keyResult.resolver.base";
import { KeyResult } from "./base/KeyResult";
import { KeyResultService } from "./keyResult.service";

@graphql.Resolver(() => KeyResult)
export class KeyResultResolver extends KeyResultResolverBase {
  constructor(protected readonly service: KeyResultService) {
    super(service);
  }
}
