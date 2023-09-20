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
import { CreateCandidateDepartmentArgs } from "./CreateCandidateDepartmentArgs";
import { UpdateCandidateDepartmentArgs } from "./UpdateCandidateDepartmentArgs";
import { DeleteCandidateDepartmentArgs } from "./DeleteCandidateDepartmentArgs";
import { CandidateDepartmentCountArgs } from "./CandidateDepartmentCountArgs";
import { CandidateDepartmentFindManyArgs } from "./CandidateDepartmentFindManyArgs";
import { CandidateDepartmentFindUniqueArgs } from "./CandidateDepartmentFindUniqueArgs";
import { CandidateDepartment } from "./CandidateDepartment";
import { OrganizationDepartment } from "../../organizationDepartment/base/OrganizationDepartment";
import { Candidate } from "../../candidate/base/Candidate";
import { CandidateDepartmentService } from "../candidateDepartment.service";
@graphql.Resolver(() => CandidateDepartment)
export class CandidateDepartmentResolverBase {
  constructor(protected readonly service: CandidateDepartmentService) {}

  async _candidateDepartmentsMeta(
    @graphql.Args() args: CandidateDepartmentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CandidateDepartment])
  async candidateDepartments(
    @graphql.Args() args: CandidateDepartmentFindManyArgs
  ): Promise<CandidateDepartment[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => CandidateDepartment, { nullable: true })
  async candidateDepartment(
    @graphql.Args() args: CandidateDepartmentFindUniqueArgs
  ): Promise<CandidateDepartment | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CandidateDepartment)
  async createCandidateDepartment(
    @graphql.Args() args: CreateCandidateDepartmentArgs
  ): Promise<CandidateDepartment> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        organizationDepartment: {
          connect: args.data.organizationDepartment,
        },

        candidate: {
          connect: args.data.candidate,
        },
      },
    });
  }

  @graphql.Mutation(() => CandidateDepartment)
  async updateCandidateDepartment(
    @graphql.Args() args: UpdateCandidateDepartmentArgs
  ): Promise<CandidateDepartment | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          organizationDepartment: {
            connect: args.data.organizationDepartment,
          },

          candidate: {
            connect: args.data.candidate,
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

  @graphql.Mutation(() => CandidateDepartment)
  async deleteCandidateDepartment(
    @graphql.Args() args: DeleteCandidateDepartmentArgs
  ): Promise<CandidateDepartment | null> {
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

  @graphql.ResolveField(() => OrganizationDepartment, {
    nullable: true,
    name: "organizationDepartment",
  })
  async resolveFieldOrganizationDepartment(
    @graphql.Parent() parent: CandidateDepartment
  ): Promise<OrganizationDepartment | null> {
    const result = await this.service.getOrganizationDepartment(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Candidate, {
    nullable: true,
    name: "candidate",
  })
  async resolveFieldCandidate(
    @graphql.Parent() parent: CandidateDepartment
  ): Promise<Candidate | null> {
    const result = await this.service.getCandidate(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}