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
import { CreateCandidateSkillArgs } from "./CreateCandidateSkillArgs";
import { UpdateCandidateSkillArgs } from "./UpdateCandidateSkillArgs";
import { DeleteCandidateSkillArgs } from "./DeleteCandidateSkillArgs";
import { CandidateSkillCountArgs } from "./CandidateSkillCountArgs";
import { CandidateSkillFindManyArgs } from "./CandidateSkillFindManyArgs";
import { CandidateSkillFindUniqueArgs } from "./CandidateSkillFindUniqueArgs";
import { CandidateSkill } from "./CandidateSkill";
import { Candidate } from "../../candidate/base/Candidate";
import { Tenant } from "../../tenant/base/Tenant";
import { Organization } from "../../organization/base/Organization";
import { CandidateSkillService } from "../candidateSkill.service";
@graphql.Resolver(() => CandidateSkill)
export class CandidateSkillResolverBase {
  constructor(protected readonly service: CandidateSkillService) {}

  async _candidateSkillsMeta(
    @graphql.Args() args: CandidateSkillCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CandidateSkill])
  async candidateSkills(
    @graphql.Args() args: CandidateSkillFindManyArgs
  ): Promise<CandidateSkill[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => CandidateSkill, { nullable: true })
  async candidateSkill(
    @graphql.Args() args: CandidateSkillFindUniqueArgs
  ): Promise<CandidateSkill | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CandidateSkill)
  async createCandidateSkill(
    @graphql.Args() args: CreateCandidateSkillArgs
  ): Promise<CandidateSkill> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        candidate: args.data.candidate
          ? {
              connect: args.data.candidate,
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

  @graphql.Mutation(() => CandidateSkill)
  async updateCandidateSkill(
    @graphql.Args() args: UpdateCandidateSkillArgs
  ): Promise<CandidateSkill | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          candidate: args.data.candidate
            ? {
                connect: args.data.candidate,
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

  @graphql.Mutation(() => CandidateSkill)
  async deleteCandidateSkill(
    @graphql.Args() args: DeleteCandidateSkillArgs
  ): Promise<CandidateSkill | null> {
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

  @graphql.ResolveField(() => Candidate, {
    nullable: true,
    name: "candidate",
  })
  async resolveFieldCandidate(
    @graphql.Parent() parent: CandidateSkill
  ): Promise<Candidate | null> {
    const result = await this.service.getCandidate(parent.id);

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
    @graphql.Parent() parent: CandidateSkill
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
    @graphql.Parent() parent: CandidateSkill
  ): Promise<Organization | null> {
    const result = await this.service.getOrganization(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}