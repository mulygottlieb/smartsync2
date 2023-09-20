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
import { CreateCandidateExperienceArgs } from "./CreateCandidateExperienceArgs";
import { UpdateCandidateExperienceArgs } from "./UpdateCandidateExperienceArgs";
import { DeleteCandidateExperienceArgs } from "./DeleteCandidateExperienceArgs";
import { CandidateExperienceCountArgs } from "./CandidateExperienceCountArgs";
import { CandidateExperienceFindManyArgs } from "./CandidateExperienceFindManyArgs";
import { CandidateExperienceFindUniqueArgs } from "./CandidateExperienceFindUniqueArgs";
import { CandidateExperience } from "./CandidateExperience";
import { Tenant } from "../../tenant/base/Tenant";
import { Organization } from "../../organization/base/Organization";
import { Candidate } from "../../candidate/base/Candidate";
import { CandidateExperienceService } from "../candidateExperience.service";
@graphql.Resolver(() => CandidateExperience)
export class CandidateExperienceResolverBase {
  constructor(protected readonly service: CandidateExperienceService) {}

  async _candidateExperiencesMeta(
    @graphql.Args() args: CandidateExperienceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CandidateExperience])
  async candidateExperiences(
    @graphql.Args() args: CandidateExperienceFindManyArgs
  ): Promise<CandidateExperience[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => CandidateExperience, { nullable: true })
  async candidateExperience(
    @graphql.Args() args: CandidateExperienceFindUniqueArgs
  ): Promise<CandidateExperience | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CandidateExperience)
  async createCandidateExperience(
    @graphql.Args() args: CreateCandidateExperienceArgs
  ): Promise<CandidateExperience> {
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

        candidate: args.data.candidate
          ? {
              connect: args.data.candidate,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => CandidateExperience)
  async updateCandidateExperience(
    @graphql.Args() args: UpdateCandidateExperienceArgs
  ): Promise<CandidateExperience | null> {
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

          candidate: args.data.candidate
            ? {
                connect: args.data.candidate,
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

  @graphql.Mutation(() => CandidateExperience)
  async deleteCandidateExperience(
    @graphql.Args() args: DeleteCandidateExperienceArgs
  ): Promise<CandidateExperience | null> {
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

  @graphql.ResolveField(() => Tenant, {
    nullable: true,
    name: "tenant",
  })
  async resolveFieldTenant(
    @graphql.Parent() parent: CandidateExperience
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
    @graphql.Parent() parent: CandidateExperience
  ): Promise<Organization | null> {
    const result = await this.service.getOrganization(parent.id);

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
    @graphql.Parent() parent: CandidateExperience
  ): Promise<Candidate | null> {
    const result = await this.service.getCandidate(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}