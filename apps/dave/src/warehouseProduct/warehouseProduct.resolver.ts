import * as graphql from "@nestjs/graphql";
import { WarehouseProductResolverBase } from "./base/warehouseProduct.resolver.base";
import { WarehouseProduct } from "./base/WarehouseProduct";
import { WarehouseProductService } from "./warehouseProduct.service";

@graphql.Resolver(() => WarehouseProduct)
export class WarehouseProductResolver extends WarehouseProductResolverBase {
  constructor(protected readonly service: WarehouseProductService) {
    super(service);
  }
}
