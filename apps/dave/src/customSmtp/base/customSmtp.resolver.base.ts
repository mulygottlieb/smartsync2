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
import { CreateCustomSmtpArgs } from "./CreateCustomSmtpArgs";
import { UpdateCustomSmtpArgs } from "./UpdateCustomSmtpArgs";
import { DeleteCustomSmtpArgs } from "./DeleteCustomSmtpArgs";
import { CustomSmtpCountArgs } from "./CustomSmtpCountArgs";
import { CustomSmtpFindManyArgs } from "./CustomSmtpFindManyArgs";
import { CustomSmtpFindUniqueArgs } from "./CustomSmtpFindUniqueArgs";
import { CustomSmtp } from "./CustomSmtp";
import { Organization } from "../../organization/base/Organization";
import { Tenant } from "../../tenant/base/Tenant";
import { CustomSmtpService } from "../customSmtp.service";
@graphql.Resolver(() => CustomSmtp)
export class CustomSmtpResolverBase {
  constructor(protected readonly service: CustomSmtpService) {}

  async _customSmtpsMeta(
    @graphql.Args() args: CustomSmtpCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CustomSmtp])
  async customSmtps(
    @graphql.Args() args: CustomSmtpFindManyArgs
  ): Promise<CustomSmtp[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => CustomSmtp, { nullable: true })
  async customSmtp(
    @graphql.Args() args: CustomSmtpFindUniqueArgs
  ): Promise<CustomSmtp | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CustomSmtp)
  async createCustomSmtp(
    @graphql.Args() args: CreateCustomSmtpArgs
  ): Promise<CustomSmtp> {
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

  @graphql.Mutation(() => CustomSmtp)
  async updateCustomSmtp(
    @graphql.Args() args: UpdateCustomSmtpArgs
  ): Promise<CustomSmtp | null> {
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

  @graphql.Mutation(() => CustomSmtp)
  async deleteCustomSmtp(
    @graphql.Args() args: DeleteCustomSmtpArgs
  ): Promise<CustomSmtp | null> {
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
    @graphql.Parent() parent: CustomSmtp
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
    @graphql.Parent() parent: CustomSmtp
  ): Promise<Tenant | null> {
    const result = await this.service.getTenant(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
