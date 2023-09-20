import * as graphql from "@nestjs/graphql";
import { ProductGalleryItemResolverBase } from "./base/productGalleryItem.resolver.base";
import { ProductGalleryItem } from "./base/ProductGalleryItem";
import { ProductGalleryItemService } from "./productGalleryItem.service";

@graphql.Resolver(() => ProductGalleryItem)
export class ProductGalleryItemResolver extends ProductGalleryItemResolverBase {
  constructor(protected readonly service: ProductGalleryItemService) {
    super(service);
  }
}
