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
import { CreateProductTypeTranslationArgs } from "./CreateProductTypeTranslationArgs";
import { UpdateProductTypeTranslationArgs } from "./UpdateProductTypeTranslationArgs";
import { DeleteProductTypeTranslationArgs } from "./DeleteProductTypeTranslationArgs";
import { ProductTypeTranslationCountArgs } from "./ProductTypeTranslationCountArgs";
import { ProductTypeTranslationFindManyArgs } from "./ProductTypeTranslationFindManyArgs";
import { ProductTypeTranslationFindUniqueArgs } from "./ProductTypeTranslationFindUniqueArgs";
import { ProductTypeTranslation } from "./ProductTypeTranslation";
import { Organization } from "../../organization/base/Organization";
import { Tenant } from "../../tenant/base/Tenant";
import { ProductType } from "../../productType/base/ProductType";
import { ProductTypeTranslationService } from "../productTypeTranslation.service";
@graphql.Resolver(() => ProductTypeTranslation)
export class ProductTypeTranslationResolverBase {
  constructor(protected readonly service: ProductTypeTranslationService) {}

  async _productTypeTranslationsMeta(
    @graphql.Args() args: ProductTypeTranslationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ProductTypeTranslation])
  async productTypeTranslations(
    @graphql.Args() args: ProductTypeTranslationFindManyArgs
  ): Promise<ProductTypeTranslation[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => ProductTypeTranslation, { nullable: true })
  async productTypeTranslation(
    @graphql.Args() args: ProductTypeTranslationFindUniqueArgs
  ): Promise<ProductTypeTranslation | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ProductTypeTranslation)
  async createProductTypeTranslation(
    @graphql.Args() args: CreateProductTypeTranslationArgs
  ): Promise<ProductTypeTranslation> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        organization: args.data.organization
          ? {
              connect: args.data.organization,
            }
          : undefined,

        tenant: args.data.tenant
          ? {
              connect: args.data.tenant,
            }
          : undefined,

        productType: {
          connect: args.data.productType,
        },
      },
    });
  }

  @graphql.Mutation(() => ProductTypeTranslation)
  async updateProductTypeTranslation(
    @graphql.Args() args: UpdateProductTypeTranslationArgs
  ): Promise<ProductTypeTranslation | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          organization: args.data.organization
            ? {
                connect: args.data.organization,
              }
            : undefined,

          tenant: args.data.tenant
            ? {
                connect: args.data.tenant,
              }
            : undefined,

          productType: {
            connect: args.data.productType,
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

  @graphql.Mutation(() => ProductTypeTranslation)
  async deleteProductTypeTranslation(
    @graphql.Args() args: DeleteProductTypeTranslationArgs
  ): Promise<ProductTypeTranslation | null> {
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

  @graphql.ResolveField(() => Organization, {
    nullable: true,
    name: "organization",
  })
  async resolveFieldOrganization(
    @graphql.Parent() parent: ProductTypeTranslation
  ): Promise<Organization | null> {
    const result = await this.service.getOrganization(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Tenant, {
    nullable: true,
    name: "tenant",
  })
  async resolveFieldTenant(
    @graphql.Parent() parent: ProductTypeTranslation
  ): Promise<Tenant | null> {
    const result = await this.service.getTenant(parent.id);

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
    @graphql.Parent() parent: ProductTypeTranslation
  ): Promise<ProductType | null> {
    const result = await this.service.getProductType(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}