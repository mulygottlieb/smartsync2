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
import { CreateKeyResultUpdateArgs } from "./CreateKeyResultUpdateArgs";
import { UpdateKeyResultUpdateArgs } from "./UpdateKeyResultUpdateArgs";
import { DeleteKeyResultUpdateArgs } from "./DeleteKeyResultUpdateArgs";
import { KeyResultUpdateCountArgs } from "./KeyResultUpdateCountArgs";
import { KeyResultUpdateFindManyArgs } from "./KeyResultUpdateFindManyArgs";
import { KeyResultUpdateFindUniqueArgs } from "./KeyResultUpdateFindUniqueArgs";
import { KeyResultUpdate } from "./KeyResultUpdate";
import { KeyResult } from "../../keyResult/base/KeyResult";
import { Tenant } from "../../tenant/base/Tenant";
import { Organization } from "../../organization/base/Organization";
import { KeyResultUpdateService } from "../keyResultUpdate.service";
@graphql.Resolver(() => KeyResultUpdate)
export class KeyResultUpdateResolverBase {
  constructor(protected readonly service: KeyResultUpdateService) {}

  async _keyResultUpdatesMeta(
    @graphql.Args() args: KeyResultUpdateCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [KeyResultUpdate])
  async keyResultUpdates(
    @graphql.Args() args: KeyResultUpdateFindManyArgs
  ): Promise<KeyResultUpdate[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => KeyResultUpdate, { nullable: true })
  async keyResultUpdate(
    @graphql.Args() args: KeyResultUpdateFindUniqueArgs
  ): Promise<KeyResultUpdate | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => KeyResultUpdate)
  async createKeyResultUpdate(
    @graphql.Args() args: CreateKeyResultUpdateArgs
  ): Promise<KeyResultUpdate> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        keyResult: args.data.keyResult
          ? {
              connect: args.data.keyResult,
            }
          : undefined,

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

  @graphql.Mutation(() => KeyResultUpdate)
  async updateKeyResultUpdate(
    @graphql.Args() args: UpdateKeyResultUpdateArgs
  ): Promise<KeyResultUpdate | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          keyResult: args.data.keyResult
            ? {
                connect: args.data.keyResult,
              }
            : undefined,

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

  @graphql.Mutation(() => KeyResultUpdate)
  async deleteKeyResultUpdate(
    @graphql.Args() args: DeleteKeyResultUpdateArgs
  ): Promise<KeyResultUpdate | null> {
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

  @graphql.ResolveField(() => KeyResult, {
    nullable: true,
    name: "keyResult",
  })
  async resolveFieldKeyResult(
    @graphql.Parent() parent: KeyResultUpdate
  ): Promise<KeyResult | null> {
    const result = await this.service.getKeyResult(parent.id);

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
    @graphql.Parent() parent: KeyResultUpdate
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
    @graphql.Parent() parent: KeyResultUpdate
  ): Promise<Organization | null> {
    const result = await this.service.getOrganization(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
