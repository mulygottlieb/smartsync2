import * as graphql from "@nestjs/graphql";
import { TagProductResolverBase } from "./base/tagProduct.resolver.base";
import { TagProduct } from "./base/TagProduct";
import { TagProductService } from "./tagProduct.service";

@graphql.Resolver(() => TagProduct)
export class TagProductResolver extends TagProductResolverBase {
  constructor(protected readonly service: TagProductService) {
    super(service);
  }
}
