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
import { CreateIntegrationMapArgs } from "./CreateIntegrationMapArgs";
import { UpdateIntegrationMapArgs } from "./UpdateIntegrationMapArgs";
import { DeleteIntegrationMapArgs } from "./DeleteIntegrationMapArgs";
import { IntegrationMapCountArgs } from "./IntegrationMapCountArgs";
import { IntegrationMapFindManyArgs } from "./IntegrationMapFindManyArgs";
import { IntegrationMapFindUniqueArgs } from "./IntegrationMapFindUniqueArgs";
import { IntegrationMap } from "./IntegrationMap";
import { Organization } from "../../organization/base/Organization";
import { IntegrationTenant } from "../../integrationTenant/base/IntegrationTenant";
import { Tenant } from "../../tenant/base/Tenant";
import { IntegrationMapService } from "../integrationMap.service";
@graphql.Resolver(() => IntegrationMap)
export class IntegrationMapResolverBase {
  constructor(protected readonly service: IntegrationMapService) {}

  async _integrationMapsMeta(
    @graphql.Args() args: IntegrationMapCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [IntegrationMap])
  async integrationMaps(
    @graphql.Args() args: IntegrationMapFindManyArgs
  ): Promise<IntegrationMap[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => IntegrationMap, { nullable: true })
  async integrationMap(
    @graphql.Args() args: IntegrationMapFindUniqueArgs
  ): Promise<IntegrationMap | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => IntegrationMap)
  async createIntegrationMap(
    @graphql.Args() args: CreateIntegrationMapArgs
  ): Promise<IntegrationMap> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        organization: args.data.organization
          ? {
              connect: args.data.organization,
            }
          : undefined,

        integrationTenant: {
          connect: args.data.integrationTenant,
        },

        tenant: args.data.tenant
          ? {
              connect: args.data.tenant,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => IntegrationMap)
  async updateIntegrationMap(
    @graphql.Args() args: UpdateIntegrationMapArgs
  ): Promise<IntegrationMap | null> {
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

          integrationTenant: {
            connect: args.data.integrationTenant,
          },

          tenant: args.data.tenant
            ? {
                connect: args.data.tenant,
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

  @graphql.Mutation(() => IntegrationMap)
  async deleteIntegrationMap(
    @graphql.Args() args: DeleteIntegrationMapArgs
  ): Promise<IntegrationMap | null> {
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
    @graphql.Parent() parent: IntegrationMap
  ): Promise<Organization | null> {
    const result = await this.service.getOrganization(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => IntegrationTenant, {
    nullable: true,
    name: "integrationTenant",
  })
  async resolveFieldIntegrationTenant(
    @graphql.Parent() parent: IntegrationMap
  ): Promise<IntegrationTenant | null> {
    const result = await this.service.getIntegrationTenant(parent.id);

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
    @graphql.Parent() parent: IntegrationMap
  ): Promise<Tenant | null> {
    const result = await this.service.getTenant(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
