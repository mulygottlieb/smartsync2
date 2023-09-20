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
import { CreateInviteArgs } from "./CreateInviteArgs";
import { UpdateInviteArgs } from "./UpdateInviteArgs";
import { DeleteInviteArgs } from "./DeleteInviteArgs";
import { InviteCountArgs } from "./InviteCountArgs";
import { InviteFindManyArgs } from "./InviteFindManyArgs";
import { InviteFindUniqueArgs } from "./InviteFindUniqueArgs";
import { Invite } from "./Invite";
import { InviteOrganizationContactFindManyArgs } from "../../inviteOrganizationContact/base/InviteOrganizationContactFindManyArgs";
import { InviteOrganizationContact } from "../../inviteOrganizationContact/base/InviteOrganizationContact";
import { InviteOrganizationDepartmentFindManyArgs } from "../../inviteOrganizationDepartment/base/InviteOrganizationDepartmentFindManyArgs";
import { InviteOrganizationDepartment } from "../../inviteOrganizationDepartment/base/InviteOrganizationDepartment";
import { InviteOrganizationProjectFindManyArgs } from "../../inviteOrganizationProject/base/InviteOrganizationProjectFindManyArgs";
import { InviteOrganizationProject } from "../../inviteOrganizationProject/base/InviteOrganizationProject";
import { InviteOrganizationTeamFindManyArgs } from "../../inviteOrganizationTeam/base/InviteOrganizationTeamFindManyArgs";
import { InviteOrganizationTeam } from "../../inviteOrganizationTeam/base/InviteOrganizationTeam";
import { User } from "../../user/base/User";
import { Organization } from "../../organization/base/Organization";
import { Tenant } from "../../tenant/base/Tenant";
import { Role } from "../../role/base/Role";
import { InviteService } from "../invite.service";
@graphql.Resolver(() => Invite)
export class InviteResolverBase {
  constructor(protected readonly service: InviteService) {}

  async _invitesMeta(
    @graphql.Args() args: InviteCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Invite])
  async invites(@graphql.Args() args: InviteFindManyArgs): Promise<Invite[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Invite, { nullable: true })
  async invite(
    @graphql.Args() args: InviteFindUniqueArgs
  ): Promise<Invite | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Invite)
  async createInvite(@graphql.Args() args: CreateInviteArgs): Promise<Invite> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        userInviteInvitedByIdTouser: args.data.userInviteInvitedByIdTouser
          ? {
              connect: args.data.userInviteInvitedByIdTouser,
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

        role: args.data.role
          ? {
              connect: args.data.role,
            }
          : undefined,

        userInviteUserIdTouser: args.data.userInviteUserIdTouser
          ? {
              connect: args.data.userInviteUserIdTouser,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Invite)
  async updateInvite(
    @graphql.Args() args: UpdateInviteArgs
  ): Promise<Invite | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          userInviteInvitedByIdTouser: args.data.userInviteInvitedByIdTouser
            ? {
                connect: args.data.userInviteInvitedByIdTouser,
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

          role: args.data.role
            ? {
                connect: args.data.role,
              }
            : undefined,

          userInviteUserIdTouser: args.data.userInviteUserIdTouser
            ? {
                connect: args.data.userInviteUserIdTouser,
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

  @graphql.Mutation(() => Invite)
  async deleteInvite(
    @graphql.Args() args: DeleteInviteArgs
  ): Promise<Invite | null> {
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

  @graphql.ResolveField(() => [InviteOrganizationContact], {
    name: "inviteOrganizationContact",
  })
  async resolveFieldInviteOrganizationContact(
    @graphql.Parent() parent: Invite,
    @graphql.Args() args: InviteOrganizationContactFindManyArgs
  ): Promise<InviteOrganizationContact[]> {
    const results = await this.service.findInviteOrganizationContact(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [InviteOrganizationDepartment], {
    name: "inviteOrganizationDepartment",
  })
  async resolveFieldInviteOrganizationDepartment(
    @graphql.Parent() parent: Invite,
    @graphql.Args() args: InviteOrganizationDepartmentFindManyArgs
  ): Promise<InviteOrganizationDepartment[]> {
    const results = await this.service.findInviteOrganizationDepartment(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [InviteOrganizationProject], {
    name: "inviteOrganizationProject",
  })
  async resolveFieldInviteOrganizationProject(
    @graphql.Parent() parent: Invite,
    @graphql.Args() args: InviteOrganizationProjectFindManyArgs
  ): Promise<InviteOrganizationProject[]> {
    const results = await this.service.findInviteOrganizationProject(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [InviteOrganizationTeam], {
    name: "inviteOrganizationTeam",
  })
  async resolveFieldInviteOrganizationTeam(
    @graphql.Parent() parent: Invite,
    @graphql.Args() args: InviteOrganizationTeamFindManyArgs
  ): Promise<InviteOrganizationTeam[]> {
    const results = await this.service.findInviteOrganizationTeam(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "userInviteInvitedByIdTouser",
  })
  async resolveFieldUserInviteInvitedByIdTouser(
    @graphql.Parent() parent: Invite
  ): Promise<User | null> {
    const result = await this.service.getUserInviteInvitedByIdTouser(parent.id);

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
    @graphql.Parent() parent: Invite
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
    @graphql.Parent() parent: Invite
  ): Promise<Tenant | null> {
    const result = await this.service.getTenant(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Role, {
    nullable: true,
    name: "role",
  })
  async resolveFieldRole(
    @graphql.Parent() parent: Invite
  ): Promise<Role | null> {
    const result = await this.service.getRole(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "userInviteUserIdTouser",
  })
  async resolveFieldUserInviteUserIdTouser(
    @graphql.Parent() parent: Invite
  ): Promise<User | null> {
    const result = await this.service.getUserInviteUserIdTouser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}