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
import { CreateIntegrationTenantArgs } from "./CreateIntegrationTenantArgs";
import { UpdateIntegrationTenantArgs } from "./UpdateIntegrationTenantArgs";
import { DeleteIntegrationTenantArgs } from "./DeleteIntegrationTenantArgs";
import { IntegrationTenantCountArgs } from "./IntegrationTenantCountArgs";
import { IntegrationTenantFindManyArgs } from "./IntegrationTenantFindManyArgs";
import { IntegrationTenantFindUniqueArgs } from "./IntegrationTenantFindUniqueArgs";
import { IntegrationTenant } from "./IntegrationTenant";
import { IntegrationEntitySettingFindManyArgs } from "../../integrationEntitySetting/base/IntegrationEntitySettingFindManyArgs";
import { IntegrationEntitySetting } from "../../integrationEntitySetting/base/IntegrationEntitySetting";
import { IntegrationMapFindManyArgs } from "../../integrationMap/base/IntegrationMapFindManyArgs";
import { IntegrationMap } from "../../integrationMap/base/IntegrationMap";
import { IntegrationSettingFindManyArgs } from "../../integrationSetting/base/IntegrationSettingFindManyArgs";
import { IntegrationSetting } from "../../integrationSetting/base/IntegrationSetting";
import { Tenant } from "../../tenant/base/Tenant";
import { Organization } from "../../organization/base/Organization";
import { IntegrationTenantService } from "../integrationTenant.service";
@graphql.Resolver(() => IntegrationTenant)
export class IntegrationTenantResolverBase {
  constructor(protected readonly service: IntegrationTenantService) {}

  async _integrationTenantsMeta(
    @graphql.Args() args: IntegrationTenantCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [IntegrationTenant])
  async integrationTenants(
    @graphql.Args() args: IntegrationTenantFindManyArgs
  ): Promise<IntegrationTenant[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => IntegrationTenant, { nullable: true })
  async integrationTenant(
    @graphql.Args() args: IntegrationTenantFindUniqueArgs
  ): Promise<IntegrationTenant | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => IntegrationTenant)
  async createIntegrationTenant(
    @graphql.Args() args: CreateIntegrationTenantArgs
  ): Promise<IntegrationTenant> {
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
      },
    });
  }

  @graphql.Mutation(() => IntegrationTenant)
  async updateIntegrationTenant(
    @graphql.Args() args: UpdateIntegrationTenantArgs
  ): Promise<IntegrationTenant | null> {
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

  @graphql.Mutation(() => IntegrationTenant)
  async deleteIntegrationTenant(
    @graphql.Args() args: DeleteIntegrationTenantArgs
  ): Promise<IntegrationTenant | null> {
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

  @graphql.ResolveField(() => [IntegrationEntitySetting], {
    name: "integrationEntitySetting",
  })
  async resolveFieldIntegrationEntitySetting(
    @graphql.Parent() parent: IntegrationTenant,
    @graphql.Args() args: IntegrationEntitySettingFindManyArgs
  ): Promise<IntegrationEntitySetting[]> {
    const results = await this.service.findIntegrationEntitySetting(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [IntegrationMap], { name: "integrationMap" })
  async resolveFieldIntegrationMap(
    @graphql.Parent() parent: IntegrationTenant,
    @graphql.Args() args: IntegrationMapFindManyArgs
  ): Promise<IntegrationMap[]> {
    const results = await this.service.findIntegrationMap(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [IntegrationSetting], {
    name: "integrationSetting",
  })
  async resolveFieldIntegrationSetting(
    @graphql.Parent() parent: IntegrationTenant,
    @graphql.Args() args: IntegrationSettingFindManyArgs
  ): Promise<IntegrationSetting[]> {
    const results = await this.service.findIntegrationSetting(parent.id, args);

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
    @graphql.Parent() parent: IntegrationTenant
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
    @graphql.Parent() parent: IntegrationTenant
  ): Promise<Organization | null> {
    const result = await this.service.getOrganization(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}