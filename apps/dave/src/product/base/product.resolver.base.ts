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
import { CreateProductArgs } from "./CreateProductArgs";
import { UpdateProductArgs } from "./UpdateProductArgs";
import { DeleteProductArgs } from "./DeleteProductArgs";
import { ProductCountArgs } from "./ProductCountArgs";
import { ProductFindManyArgs } from "./ProductFindManyArgs";
import { ProductFindUniqueArgs } from "./ProductFindUniqueArgs";
import { Product } from "./Product";
import { InvoiceItemFindManyArgs } from "../../invoiceItem/base/InvoiceItemFindManyArgs";
import { InvoiceItem } from "../../invoiceItem/base/InvoiceItem";
import { ProductGalleryItemFindManyArgs } from "../../productGalleryItem/base/ProductGalleryItemFindManyArgs";
import { ProductGalleryItem } from "../../productGalleryItem/base/ProductGalleryItem";
import { ProductOptionGroupFindManyArgs } from "../../productOptionGroup/base/ProductOptionGroupFindManyArgs";
import { ProductOptionGroup } from "../../productOptionGroup/base/ProductOptionGroup";
import { ProductTranslationFindManyArgs } from "../../productTranslation/base/ProductTranslationFindManyArgs";
import { ProductTranslation } from "../../productTranslation/base/ProductTranslation";
import { ProductVariantFindManyArgs } from "../../productVariant/base/ProductVariantFindManyArgs";
import { ProductVariant } from "../../productVariant/base/ProductVariant";
import { TagProductFindManyArgs } from "../../tagProduct/base/TagProductFindManyArgs";
import { TagProduct } from "../../tagProduct/base/TagProduct";
import { WarehouseProductFindManyArgs } from "../../warehouseProduct/base/WarehouseProductFindManyArgs";
import { WarehouseProduct } from "../../warehouseProduct/base/WarehouseProduct";
import { Tenant } from "../../tenant/base/Tenant";
import { Organization } from "../../organization/base/Organization";
import { ProductType } from "../../productType/base/ProductType";
import { ImageAsset } from "../../imageAsset/base/ImageAsset";
import { ProductCategory } from "../../productCategory/base/ProductCategory";
import { ProductService } from "../product.service";
@graphql.Resolver(() => Product)
export class ProductResolverBase {
  constructor(protected readonly service: ProductService) {}

  async _productsMeta(
    @graphql.Args() args: ProductCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Product])
  async products(
    @graphql.Args() args: ProductFindManyArgs
  ): Promise<Product[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Product, { nullable: true })
  async product(
    @graphql.Args() args: ProductFindUniqueArgs
  ): Promise<Product | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Product)
  async createProduct(
    @graphql.Args() args: CreateProductArgs
  ): Promise<Product> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        tenant: args.data.tenant
          ? {
              connect: args.data.tenant,
            }
          : undefined,

        organization: args.data.organization
          ? {
              connect: args.data.organization,
            }
          : undefined,

        productType: args.data.productType
          ? {
              connect: args.data.productType,
            }
          : undefined,

        imageAsset: args.data.imageAsset
          ? {
              connect: args.data.imageAsset,
            }
          : undefined,

        productCategory: args.data.productCategory
          ? {
              connect: args.data.productCategory,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Product)
  async updateProduct(
    @graphql.Args() args: UpdateProductArgs
  ): Promise<Product | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          tenant: args.data.tenant
            ? {
                connect: args.data.tenant,
              }
            : undefined,

          organization: args.data.organization
            ? {
                connect: args.data.organization,
              }
            : undefined,

          productType: args.data.productType
            ? {
                connect: args.data.productType,
              }
            : undefined,

          imageAsset: args.data.imageAsset
            ? {
                connect: args.data.imageAsset,
              }
            : undefined,

          productCategory: args.data.productCategory
            ? {
                connect: args.data.productCategory,
              }
            : undefined,
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

  @graphql.Mutation(() => Product)
  async deleteProduct(
    @graphql.Args() args: DeleteProductArgs
  ): Promise<Product | null> {
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

  @graphql.ResolveField(() => [InvoiceItem], { name: "invoiceItem" })
  async resolveFieldInvoiceItem(
    @graphql.Parent() parent: Product,
    @graphql.Args() args: InvoiceItemFindManyArgs
  ): Promise<InvoiceItem[]> {
    const results = await this.service.findInvoiceItem(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [ProductGalleryItem], {
    name: "productGalleryItem",
  })
  async resolveFieldProductGalleryItem(
    @graphql.Parent() parent: Product,
    @graphql.Args() args: ProductGalleryItemFindManyArgs
  ): Promise<ProductGalleryItem[]> {
    const results = await this.service.findProductGalleryItem(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [ProductOptionGroup], {
    name: "productOptionGroup",
  })
  async resolveFieldProductOptionGroup(
    @graphql.Parent() parent: Product,
    @graphql.Args() args: ProductOptionGroupFindManyArgs
  ): Promise<ProductOptionGroup[]> {
    const results = await this.service.findProductOptionGroup(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [ProductTranslation], {
    name: "productTranslation",
  })
  async resolveFieldProductTranslation(
    @graphql.Parent() parent: Product,
    @graphql.Args() args: ProductTranslationFindManyArgs
  ): Promise<ProductTranslation[]> {
    const results = await this.service.findProductTranslation(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [ProductVariant], { name: "productVariant" })
  async resolveFieldProductVariant(
    @graphql.Parent() parent: Product,
    @graphql.Args() args: ProductVariantFindManyArgs
  ): Promise<ProductVariant[]> {
    const results = await this.service.findProductVariant(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [TagProduct], { name: "tagProduct" })
  async resolveFieldTagProduct(
    @graphql.Parent() parent: Product,
    @graphql.Args() args: TagProductFindManyArgs
  ): Promise<TagProduct[]> {
    const results = await this.service.findTagProduct(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [WarehouseProduct], { name: "warehouseProduct" })
  async resolveFieldWarehouseProduct(
    @graphql.Parent() parent: Product,
    @graphql.Args() args: WarehouseProductFindManyArgs
  ): Promise<WarehouseProduct[]> {
    const results = await this.service.findWarehouseProduct(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Tenant, {
    nullable: true,
    name: "tenant",
  })
  async resolveFieldTenant(
    @graphql.Parent() parent: Product
  ): Promise<Tenant | null> {
    const result = await this.service.getTenant(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Organization, {
    nullable: true,
    name: "organization",
  })
  async resolveFieldOrganization(
    @graphql.Parent() parent: Product
  ): Promise<Organization | null> {
    const result = await this.service.getOrganization(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => ProductType, {
    nullable: true,
    name: "productType",
  })
  async resolveFieldProductType(
    @graphql.Parent() parent: Product
  ): Promise<ProductType | null> {
    const result = await this.service.getProductType(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => ImageAsset, {
    nullable: true,
    name: "imageAsset",
  })
  async resolveFieldImageAsset(
    @graphql.Parent() parent: Product
  ): Promise<ImageAsset | null> {
    const result = await this.service.getImageAsset(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => ProductCategory, {
    nullable: true,
    name: "productCategory",
  })
  async resolveFieldProductCategory(
    @graphql.Parent() parent: Product
  ): Promise<ProductCategory | null> {
    const result = await this.service.getProductCategory(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
