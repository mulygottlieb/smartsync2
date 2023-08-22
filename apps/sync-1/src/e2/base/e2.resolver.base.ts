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
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateE2Args } from "./CreateE2Args";
import { UpdateE2Args } from "./UpdateE2Args";
import { DeleteE2Args } from "./DeleteE2Args";
import { E2CountArgs } from "./E2CountArgs";
import { E2FindManyArgs } from "./E2FindManyArgs";
import { E2FindUniqueArgs } from "./E2FindUniqueArgs";
import { E2 } from "./E2";
import { E2Service } from "../e2.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => E2)
export class E2ResolverBase {
  constructor(
    protected readonly service: E2Service,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "E2",
    action: "read",
    possession: "any",
  })
  async _e2sMeta(@graphql.Args() args: E2CountArgs): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [E2])
  @nestAccessControl.UseRoles({
    resource: "E2",
    action: "read",
    possession: "any",
  })
  async e2s(@graphql.Args() args: E2FindManyArgs): Promise<E2[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => E2, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "E2",
    action: "read",
    possession: "own",
  })
  async e2(@graphql.Args() args: E2FindUniqueArgs): Promise<E2 | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => E2)
  @nestAccessControl.UseRoles({
    resource: "E2",
    action: "create",
    possession: "any",
  })
  async createE2(@graphql.Args() args: CreateE2Args): Promise<E2> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => E2)
  @nestAccessControl.UseRoles({
    resource: "E2",
    action: "update",
    possession: "any",
  })
  async updateE2(@graphql.Args() args: UpdateE2Args): Promise<E2 | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => E2)
  @nestAccessControl.UseRoles({
    resource: "E2",
    action: "delete",
    possession: "any",
  })
  async deleteE2(@graphql.Args() args: DeleteE2Args): Promise<E2 | null> {
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
}
