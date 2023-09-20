import * as graphql from "@nestjs/graphql";
import { WarehouseMerchantResolverBase } from "./base/warehouseMerchant.resolver.base";
import { WarehouseMerchant } from "./base/WarehouseMerchant";
import { WarehouseMerchantService } from "./warehouseMerchant.service";

@graphql.Resolver(() => WarehouseMerchant)
export class WarehouseMerchantResolver extends WarehouseMerchantResolverBase {
  constructor(protected readonly service: WarehouseMerchantService) {
    super(service);
  }
}
