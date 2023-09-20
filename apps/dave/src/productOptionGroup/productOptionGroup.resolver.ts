import * as graphql from "@nestjs/graphql";
import { ProductOptionGroupResolverBase } from "./base/productOptionGroup.resolver.base";
import { ProductOptionGroup } from "./base/ProductOptionGroup";
import { ProductOptionGroupService } from "./productOptionGroup.service";

@graphql.Resolver(() => ProductOptionGroup)
export class ProductOptionGroupResolver extends ProductOptionGroupResolverBase {
  constructor(protected readonly service: ProductOptionGroupService) {
    super(service);
  }
}
