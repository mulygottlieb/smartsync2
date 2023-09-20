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
import { CreateProductOptionGroupArgs } from "./CreateProductOptionGroupArgs";
import { UpdateProductOptionGroupArgs } from "./UpdateProductOptionGroupArgs";
import { DeleteProductOptionGroupArgs } from "./DeleteProductOptionGroupArgs";
import { ProductOptionGroupCountArgs } from "./ProductOptionGroupCountArgs";
import { ProductOptionGroupFindManyArgs } from "./ProductOptionGroupFindManyArgs";
import { ProductOptionGroupFindUniqueArgs } from "./ProductOptionGroupFindUniqueArgs";
import { ProductOptionGroup } from "./ProductOptionGroup";
import { ProductOptionFindManyArgs } from "../../productOption/base/ProductOptionFindManyArgs";
import { ProductOption } from "../../productOption/base/ProductOption";
import { ProductOptionGroupTranslationFindManyArgs } from "../../productOptionGroupTranslation/base/ProductOptionGroupTranslationFindManyArgs";
import { ProductOptionGroupTranslation } from "../../productOptionGroupTranslation/base/ProductOptionGroupTranslation";
import { Tenant } from "../../tenant/base/Tenant";
import { Organization } from "../../organization/base/Organization";
import { Product } from "../../product/base/Product";
import { ProductOptionGroupService } from "../productOptionGroup.service";
@graphql.Resolver(() => ProductOptionGroup)
export class ProductOptionGroupResolverBase {
  constructor(protected readonly service: ProductOptionGroupService) {}

  async _productOptionGroupsMeta(
    @graphql.Args() args: ProductOptionGroupCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ProductOptionGroup])
  async productOptionGroups(
    @graphql.Args() args: ProductOptionGroupFindManyArgs
  ): Promise<ProductOptionGroup[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => ProductOptionGroup, { nullable: true })
  async productOptionGroup(
    @graphql.Args() args: ProductOptionGroupFindUniqueArgs
  ): Promise<ProductOptionGroup | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ProductOptionGroup)
  async createProductOptionGroup(
    @graphql.Args() args: CreateProductOptionGroupArgs
  ): Promise<ProductOptionGroup> {
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

        product: {
          connect: args.data.product,
        },
      },
    });
  }

  @graphql.Mutation(() => ProductOptionGroup)
  async updateProductOptionGroup(
    @graphql.Args() args: UpdateProductOptionGroupArgs
  ): Promise<ProductOptionGroup | null> {
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

  @graphql.Mutation(() => ProductOptionGroup)
  async deleteProductOptionGroup(
    @graphql.Args() args: DeleteProductOptionGroupArgs
  ): Promise<ProductOptionGroup | null> {
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

  @graphql.ResolveField(() => [ProductOption], { name: "productOption" })
  async resolveFieldProductOption(
    @graphql.Parent() parent: ProductOptionGroup,
    @graphql.Args() args: ProductOptionFindManyArgs
  ): Promise<ProductOption[]> {
    const results = await this.service.findProductOption(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [ProductOptionGroupTranslation], {
    name: "productOptionGroupTranslation",
  })
  async resolveFieldProductOptionGroupTranslation(
    @graphql.Parent() parent: ProductOptionGroup,
    @graphql.Args() args: ProductOptionGroupTranslationFindManyArgs
  ): Promise<ProductOptionGroupTranslation[]> {
    const results = await this.service.findProductOptionGroupTranslation(
      parent.id,
      args
    );

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
    @graphql.Parent() parent: ProductOptionGroup
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
    @graphql.Parent() parent: ProductOptionGroup
  ): Promise<Organization | null> {
    const result = await this.service.getOrganization(parent.id);

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
    @graphql.Parent() parent: ProductOptionGroup
  ): Promise<Product | null> {
    const result = await this.service.getProduct(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}