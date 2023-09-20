import * as graphql from "@nestjs/graphql";
import { ProductTypeResolverBase } from "./base/productType.resolver.base";
import { ProductType } from "./base/ProductType";
import { ProductTypeService } from "./productType.service";

@graphql.Resolver(() => ProductType)
export class ProductTypeResolver extends ProductTypeResolverBase {
  constructor(protected readonly service: ProductTypeService) {
    super(service);
  }
}
