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
import { CreateIssueTypeArgs } from "./CreateIssueTypeArgs";
import { UpdateIssueTypeArgs } from "./UpdateIssueTypeArgs";
import { DeleteIssueTypeArgs } from "./DeleteIssueTypeArgs";
import { IssueTypeCountArgs } from "./IssueTypeCountArgs";
import { IssueTypeFindManyArgs } from "./IssueTypeFindManyArgs";
import { IssueTypeFindUniqueArgs } from "./IssueTypeFindUniqueArgs";
import { IssueType } from "./IssueType";
import { OrganizationProject } from "../../organizationProject/base/OrganizationProject";
import { Organization } from "../../organization/base/Organization";
import { ImageAsset } from "../../imageAsset/base/ImageAsset";
import { OrganizationTeam } from "../../organizationTeam/base/OrganizationTeam";
import { Tenant } from "../../tenant/base/Tenant";
import { IssueTypeService } from "../issueType.service";
@graphql.Resolver(() => IssueType)
export class IssueTypeResolverBase {
  constructor(protected readonly service: IssueTypeService) {}

  async _issueTypesMeta(
    @graphql.Args() args: IssueTypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [IssueType])
  async issueTypes(
    @graphql.Args() args: IssueTypeFindManyArgs
  ): Promise<IssueType[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => IssueType, { nullable: true })
  async issueType(
    @graphql.Args() args: IssueTypeFindUniqueArgs
  ): Promise<IssueType | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => IssueType)
  async createIssueType(
    @graphql.Args() args: CreateIssueTypeArgs
  ): Promise<IssueType> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        organizationProject: args.data.organizationProject
          ? {
              connect: args.data.organizationProject,
            }
          : undefined,

        organization: args.data.organization
          ? {
              connect: args.data.organization,
            }
          : undefined,

        imageAsset: args.data.imageAsset
          ? {
              connect: args.data.imageAsset,
            }
          : undefined,

        organizationTeam: args.data.organizationTeam
          ? {
              connect: args.data.organizationTeam,
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

  @graphql.Mutation(() => IssueType)
  async updateIssueType(
    @graphql.Args() args: UpdateIssueTypeArgs
  ): Promise<IssueType | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          organizationProject: args.data.organizationProject
            ? {
                connect: args.data.organizationProject,
              }
            : undefined,

          organization: args.data.organization
            ? {
                connect: args.data.organization,
              }
            : undefined,

          imageAsset: args.data.imageAsset
            ? {
                connect: args.data.imageAsset,
              }
            : undefined,

          organizationTeam: args.data.organizationTeam
            ? {
                connect: args.data.organizationTeam,
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

  @graphql.Mutation(() => IssueType)
  async deleteIssueType(
    @graphql.Args() args: DeleteIssueTypeArgs
  ): Promise<IssueType | null> {
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

  @graphql.ResolveField(() => OrganizationProject, {
    nullable: true,
    name: "organizationProject",
  })
  async resolveFieldOrganizationProject(
    @graphql.Parent() parent: IssueType
  ): Promise<OrganizationProject | null> {
    const result = await this.service.getOrganizationProject(parent.id);

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
    @graphql.Parent() parent: IssueType
  ): Promise<Organization | null> {
    const result = await this.service.getOrganization(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => ImageAsset, {
    nullable: true,
    name: "imageAsset",
  })
  async resolveFieldImageAsset(
    @graphql.Parent() parent: IssueType
  ): Promise<ImageAsset | null> {
    const result = await this.service.getImageAsset(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => OrganizationTeam, {
    nullable: true,
    name: "organizationTeam",
  })
  async resolveFieldOrganizationTeam(
    @graphql.Parent() parent: IssueType
  ): Promise<OrganizationTeam | null> {
    const result = await this.service.getOrganizationTeam(parent.id);

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
    @graphql.Parent() parent: IssueType
  ): Promise<Tenant | null> {
    const result = await this.service.getTenant(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}