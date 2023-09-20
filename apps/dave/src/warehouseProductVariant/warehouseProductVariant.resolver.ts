import * as graphql from "@nestjs/graphql";
import { WarehouseProductVariantResolverBase } from "./base/warehouseProductVariant.resolver.base";
import { WarehouseProductVariant } from "./base/WarehouseProductVariant";
import { WarehouseProductVariantService } from "./warehouseProductVariant.service";

@graphql.Resolver(() => WarehouseProductVariant)
export class WarehouseProductVariantResolver extends WarehouseProductVariantResolverBase {
  constructor(protected readonly service: WarehouseProductVariantService) {
    super(service);
  }
}
