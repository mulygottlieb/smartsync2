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
import { CreateOrganizationAwardArgs } from "./CreateOrganizationAwardArgs";
import { UpdateOrganizationAwardArgs } from "./UpdateOrganizationAwardArgs";
import { DeleteOrganizationAwardArgs } from "./DeleteOrganizationAwardArgs";
import { OrganizationAwardCountArgs } from "./OrganizationAwardCountArgs";
import { OrganizationAwardFindManyArgs } from "./OrganizationAwardFindManyArgs";
import { OrganizationAwardFindUniqueArgs } from "./OrganizationAwardFindUniqueArgs";
import { OrganizationAward } from "./OrganizationAward";
import { Organization } from "../../organization/base/Organization";
import { Tenant } from "../../tenant/base/Tenant";
import { OrganizationAwardService } from "../organizationAward.service";
@graphql.Resolver(() => OrganizationAward)
export class OrganizationAwardResolverBase {
  constructor(protected readonly service: OrganizationAwardService) {}

  async _organizationAwardsMeta(
    @graphql.Args() args: OrganizationAwardCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [OrganizationAward])
  async organizationAwards(
    @graphql.Args() args: OrganizationAwardFindManyArgs
  ): Promise<OrganizationAward[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => OrganizationAward, { nullable: true })
  async organizationAward(
    @graphql.Args() args: OrganizationAwardFindUniqueArgs
  ): Promise<OrganizationAward | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => OrganizationAward)
  async createOrganizationAward(
    @graphql.Args() args: CreateOrganizationAwardArgs
  ): Promise<OrganizationAward> {
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
      },
    });
  }

  @graphql.Mutation(() => OrganizationAward)
  async updateOrganizationAward(
    @graphql.Args() args: UpdateOrganizationAwardArgs
  ): Promise<OrganizationAward | null> {
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

  @graphql.Mutation(() => OrganizationAward)
  async deleteOrganizationAward(
    @graphql.Args() args: DeleteOrganizationAwardArgs
  ): Promise<OrganizationAward | null> {
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
    @graphql.Parent() parent: OrganizationAward
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
    @graphql.Parent() parent: OrganizationAward
  ): Promise<Tenant | null> {
    const result = await this.service.getTenant(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}