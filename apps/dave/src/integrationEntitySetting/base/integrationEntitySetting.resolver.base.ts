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
import { CreateIntegrationEntitySettingArgs } from "./CreateIntegrationEntitySettingArgs";
import { UpdateIntegrationEntitySettingArgs } from "./UpdateIntegrationEntitySettingArgs";
import { DeleteIntegrationEntitySettingArgs } from "./DeleteIntegrationEntitySettingArgs";
import { IntegrationEntitySettingCountArgs } from "./IntegrationEntitySettingCountArgs";
import { IntegrationEntitySettingFindManyArgs } from "./IntegrationEntitySettingFindManyArgs";
import { IntegrationEntitySettingFindUniqueArgs } from "./IntegrationEntitySettingFindUniqueArgs";
import { IntegrationEntitySetting } from "./IntegrationEntitySetting";
import { IntegrationEntitySettingTiedFindManyArgs } from "../../integrationEntitySettingTied/base/IntegrationEntitySettingTiedFindManyArgs";
import { IntegrationEntitySettingTied } from "../../integrationEntitySettingTied/base/IntegrationEntitySettingTied";
import { Tenant } from "../../tenant/base/Tenant";
import { Organization } from "../../organization/base/Organization";
import { IntegrationTenant } from "../../integrationTenant/base/IntegrationTenant";
import { IntegrationEntitySettingService } from "../integrationEntitySetting.service";
@graphql.Resolver(() => IntegrationEntitySetting)
export class IntegrationEntitySettingResolverBase {
  constructor(protected readonly service: IntegrationEntitySettingService) {}

  async _integrationEntitySettingsMeta(
    @graphql.Args() args: IntegrationEntitySettingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [IntegrationEntitySetting])
  async integrationEntitySettings(
    @graphql.Args() args: IntegrationEntitySettingFindManyArgs
  ): Promise<IntegrationEntitySetting[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => IntegrationEntitySetting, { nullable: true })
  async integrationEntitySetting(
    @graphql.Args() args: IntegrationEntitySettingFindUniqueArgs
  ): Promise<IntegrationEntitySetting | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => IntegrationEntitySetting)
  async createIntegrationEntitySetting(
    @graphql.Args() args: CreateIntegrationEntitySettingArgs
  ): Promise<IntegrationEntitySetting> {
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

        integrationTenant: {
          connect: args.data.integrationTenant,
        },
      },
    });
  }

  @graphql.Mutation(() => IntegrationEntitySetting)
  async updateIntegrationEntitySetting(
    @graphql.Args() args: UpdateIntegrationEntitySettingArgs
  ): Promise<IntegrationEntitySetting | null> {
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

          integrationTenant: {
            connect: args.data.integrationTenant,
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

  @graphql.Mutation(() => IntegrationEntitySetting)
  async deleteIntegrationEntitySetting(
    @graphql.Args() args: DeleteIntegrationEntitySettingArgs
  ): Promise<IntegrationEntitySetting | null> {
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

  @graphql.ResolveField(() => [IntegrationEntitySettingTied], {
    name: "integrationEntitySettingTied",
  })
  async resolveFieldIntegrationEntitySettingTied(
    @graphql.Parent() parent: IntegrationEntitySetting,
    @graphql.Args() args: IntegrationEntitySettingTiedFindManyArgs
  ): Promise<IntegrationEntitySettingTied[]> {
    const results = await this.service.findIntegrationEntitySettingTied(
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
    @graphql.Parent() parent: IntegrationEntitySetting
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
    @graphql.Parent() parent: IntegrationEntitySetting
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
    @graphql.Parent() parent: IntegrationEntitySetting
  ): Promise<IntegrationTenant | null> {
    const result = await this.service.getIntegrationTenant(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}