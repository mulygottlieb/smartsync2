import * as graphql from "@nestjs/graphql";
import { TagWarehouseResolverBase } from "./base/tagWarehouse.resolver.base";
import { TagWarehouse } from "./base/TagWarehouse";
import { TagWarehouseService } from "./tagWarehouse.service";

@graphql.Resolver(() => TagWarehouse)
export class TagWarehouseResolver extends TagWarehouseResolverBase {
  constructor(protected readonly service: TagWarehouseService) {
    super(service);
  }
}
