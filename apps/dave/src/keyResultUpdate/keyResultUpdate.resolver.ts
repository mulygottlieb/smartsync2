import * as graphql from "@nestjs/graphql";
import { KeyResultUpdateResolverBase } from "./base/keyResultUpdate.resolver.base";
import { KeyResultUpdate } from "./base/KeyResultUpdate";
import { KeyResultUpdateService } from "./keyResultUpdate.service";

@graphql.Resolver(() => KeyResultUpdate)
export class KeyResultUpdateResolver extends KeyResultUpdateResolverBase {
  constructor(protected readonly service: KeyResultUpdateService) {
    super(service);
  }
}
