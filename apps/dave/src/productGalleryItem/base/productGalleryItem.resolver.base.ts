/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateProductGalleryItemArgs } from "./CreateProductGalleryItemArgs";
import { UpdateProductGalleryItemArgs } from "./UpdateProductGalleryItemArgs";
import { DeleteProductGalleryItemArgs } from "./DeleteProductGalleryItemArgs";
import { ProductGalleryItemCountArgs } from "./ProductGalleryItemCountArgs";
import { ProductGalleryItemFindManyArgs } from "./ProductGalleryItemFindManyArgs";
import { ProductGalleryItemFindUniqueArgs } from "./ProductGalleryItemFindUniqueArgs";
import { ProductGalleryItem } from "./ProductGalleryItem";
import { ImageAsset } from "../../imageAsset/base/ImageAsset";
import { Product } from "../../product/base/Product";
import { ProductGalleryItemService } from "../productGalleryItem.service";
@graphql.Resolver(() => ProductGalleryItem)
export class ProductGalleryItemResolverBase {
  constructor(protected readonly service: ProductGalleryItemService) {}

  async _productGalleryItemsMeta(
    @graphql.Args() args: ProductGalleryItemCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ProductGalleryItem])
  async productGalleryItems(
    @graphql.Args() args: ProductGalleryItemFindManyArgs
  ): Promise<ProductGalleryItem[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => ProductGalleryItem, { nullable: true })
  async productGalleryItem(
    @graphql.Args() args: ProductGalleryItemFindUniqueArgs
  ): Promise<ProductGalleryItem | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ProductGalleryItem)
  async createProductGalleryItem(
    @graphql.Args() args: CreateProductGalleryItemArgs
  ): Promise<ProductGalleryItem> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        imageAsset: {
          connect: args.data.imageAsset,
        },

        product: {
          connect: args.data.product,
        },
      },
    });
  }

  @graphql.Mutation(() => ProductGalleryItem)
  async updateProductGalleryItem(
    @graphql.Args() args: UpdateProductGalleryItemArgs
  ): Promise<ProductGalleryItem | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          imageAsset: {
            connect: args.data.imageAsset,
          },

          product: {
            connect: args.data.product,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ProductGalleryItem)
  async deleteProductGalleryItem(
    @graphql.Args() args: DeleteProductGalleryItemArgs
  ): Promise<ProductGalleryItem | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => ImageAsset, {
    nullable: true,
    name: "imageAsset",
  })
  async resolveFieldImageAsset(
    @graphql.Parent() parent: ProductGalleryItem
  ): Promise<ImageAsset | null> {
    const result = await this.service.getImageAsset(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Product, {
    nullable: true,
    name: "product",
  })
  async resolveFieldProduct(
    @graphql.Parent() parent: ProductGalleryItem
  ): Promise<Product | null> {
    const result = await this.service.getProduct(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
