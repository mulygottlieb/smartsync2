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
import { CreateRequestApprovalArgs } from "./CreateRequestApprovalArgs";
import { UpdateRequestApprovalArgs } from "./UpdateRequestApprovalArgs";
import { DeleteRequestApprovalArgs } from "./DeleteRequestApprovalArgs";
import { RequestApprovalCountArgs } from "./RequestApprovalCountArgs";
import { RequestApprovalFindManyArgs } from "./RequestApprovalFindManyArgs";
import { RequestApprovalFindUniqueArgs } from "./RequestApprovalFindUniqueArgs";
import { RequestApproval } from "./RequestApproval";
import { RequestApprovalEmployeeFindManyArgs } from "../../requestApprovalEmployee/base/RequestApprovalEmployeeFindManyArgs";
import { RequestApprovalEmployee } from "../../requestApprovalEmployee/base/RequestApprovalEmployee";
import { RequestApprovalTeamFindManyArgs } from "../../requestApprovalTeam/base/RequestApprovalTeamFindManyArgs";
import { RequestApprovalTeam } from "../../requestApprovalTeam/base/RequestApprovalTeam";
import { TagRequestApprovalFindManyArgs } from "../../tagRequestApproval/base/TagRequestApprovalFindManyArgs";
import { TagRequestApproval } from "../../tagRequestApproval/base/TagRequestApproval";
import { ApprovalPolicy } from "../../approvalPolicy/base/ApprovalPolicy";
import { Organization } from "../../organization/base/Organization";
import { Tenant } from "../../tenant/base/Tenant";
import { RequestApprovalService } from "../requestApproval.service";
@graphql.Resolver(() => RequestApproval)
export class RequestApprovalResolverBase {
  constructor(protected readonly service: RequestApprovalService) {}

  async _requestApprovalsMeta(
    @graphql.Args() args: RequestApprovalCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [RequestApproval])
  async requestApprovals(
    @graphql.Args() args: RequestApprovalFindManyArgs
  ): Promise<RequestApproval[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => RequestApproval, { nullable: true })
  async requestApproval(
    @graphql.Args() args: RequestApprovalFindUniqueArgs
  ): Promise<RequestApproval | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => RequestApproval)
  async createRequestApproval(
    @graphql.Args() args: CreateRequestApprovalArgs
  ): Promise<RequestApproval> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        approvalPolicy: args.data.approvalPolicy
          ? {
              connect: args.data.approvalPolicy,
            }
          : undefined,

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

  @graphql.Mutation(() => RequestApproval)
  async updateRequestApproval(
    @graphql.Args() args: UpdateRequestApprovalArgs
  ): Promise<RequestApproval | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          approvalPolicy: args.data.approvalPolicy
            ? {
                connect: args.data.approvalPolicy,
              }
            : undefined,

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

  @graphql.Mutation(() => RequestApproval)
  async deleteRequestApproval(
    @graphql.Args() args: DeleteRequestApprovalArgs
  ): Promise<RequestApproval | null> {
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

  @graphql.ResolveField(() => [RequestApprovalEmployee], {
    name: "requestApprovalEmployee",
  })
  async resolveFieldRequestApprovalEmployee(
    @graphql.Parent() parent: RequestApproval,
    @graphql.Args() args: RequestApprovalEmployeeFindManyArgs
  ): Promise<RequestApprovalEmployee[]> {
    const results = await this.service.findRequestApprovalEmployee(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [RequestApprovalTeam], {
    name: "requestApprovalTeam",
  })
  async resolveFieldRequestApprovalTeam(
    @graphql.Parent() parent: RequestApproval,
    @graphql.Args() args: RequestApprovalTeamFindManyArgs
  ): Promise<RequestApprovalTeam[]> {
    const results = await this.service.findRequestApprovalTeam(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [TagRequestApproval], {
    name: "tagRequestApproval",
  })
  async resolveFieldTagRequestApproval(
    @graphql.Parent() parent: RequestApproval,
    @graphql.Args() args: TagRequestApprovalFindManyArgs
  ): Promise<TagRequestApproval[]> {
    const results = await this.service.findTagRequestApproval(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => ApprovalPolicy, {
    nullable: true,
    name: "approvalPolicy",
  })
  async resolveFieldApprovalPolicy(
    @graphql.Parent() parent: RequestApproval
  ): Promise<ApprovalPolicy | null> {
    const result = await this.service.getApprovalPolicy(parent.id);

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
    @graphql.Parent() parent: RequestApproval
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
    @graphql.Parent() parent: RequestApproval
  ): Promise<Tenant | null> {
    const result = await this.service.getTenant(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
