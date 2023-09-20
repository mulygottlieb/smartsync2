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
import { CreateCandidateCriterionRatingArgs } from "./CreateCandidateCriterionRatingArgs";
import { UpdateCandidateCriterionRatingArgs } from "./UpdateCandidateCriterionRatingArgs";
import { DeleteCandidateCriterionRatingArgs } from "./DeleteCandidateCriterionRatingArgs";
import { CandidateCriterionRatingCountArgs } from "./CandidateCriterionRatingCountArgs";
import { CandidateCriterionRatingFindManyArgs } from "./CandidateCriterionRatingFindManyArgs";
import { CandidateCriterionRatingFindUniqueArgs } from "./CandidateCriterionRatingFindUniqueArgs";
import { CandidateCriterionRating } from "./CandidateCriterionRating";
import { CandidateFeedback } from "../../candidateFeedback/base/CandidateFeedback";
import { Tenant } from "../../tenant/base/Tenant";
import { Organization } from "../../organization/base/Organization";
import { CandidatePersonalQuality } from "../../candidatePersonalQuality/base/CandidatePersonalQuality";
import { CandidateTechnology } from "../../candidateTechnology/base/CandidateTechnology";
import { CandidateCriterionRatingService } from "../candidateCriterionRating.service";
@graphql.Resolver(() => CandidateCriterionRating)
export class CandidateCriterionRatingResolverBase {
  constructor(protected readonly service: CandidateCriterionRatingService) {}

  async _candidateCriterionRatingsMeta(
    @graphql.Args() args: CandidateCriterionRatingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CandidateCriterionRating])
  async candidateCriterionRatings(
    @graphql.Args() args: CandidateCriterionRatingFindManyArgs
  ): Promise<CandidateCriterionRating[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => CandidateCriterionRating, { nullable: true })
  async candidateCriterionRating(
    @graphql.Args() args: CandidateCriterionRatingFindUniqueArgs
  ): Promise<CandidateCriterionRating | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CandidateCriterionRating)
  async createCandidateCriterionRating(
    @graphql.Args() args: CreateCandidateCriterionRatingArgs
  ): Promise<CandidateCriterionRating> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        candidateFeedback: args.data.candidateFeedback
          ? {
              connect: args.data.candidateFeedback,
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

        candidatePersonalQuality: args.data.candidatePersonalQuality
          ? {
              connect: args.data.candidatePersonalQuality,
            }
          : undefined,

        candidateTechnology: args.data.candidateTechnology
          ? {
              connect: args.data.candidateTechnology,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => CandidateCriterionRating)
  async updateCandidateCriterionRating(
    @graphql.Args() args: UpdateCandidateCriterionRatingArgs
  ): Promise<CandidateCriterionRating | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          candidateFeedback: args.data.candidateFeedback
            ? {
                connect: args.data.candidateFeedback,
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

          candidatePersonalQuality: args.data.candidatePersonalQuality
            ? {
                connect: args.data.candidatePersonalQuality,
              }
            : undefined,

          candidateTechnology: args.data.candidateTechnology
            ? {
                connect: args.data.candidateTechnology,
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

  @graphql.Mutation(() => CandidateCriterionRating)
  async deleteCandidateCriterionRating(
    @graphql.Args() args: DeleteCandidateCriterionRatingArgs
  ): Promise<CandidateCriterionRating | null> {
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

  @graphql.ResolveField(() => CandidateFeedback, {
    nullable: true,
    name: "candidateFeedback",
  })
  async resolveFieldCandidateFeedback(
    @graphql.Parent() parent: CandidateCriterionRating
  ): Promise<CandidateFeedback | null> {
    const result = await this.service.getCandidateFeedback(parent.id);

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
    @graphql.Parent() parent: CandidateCriterionRating
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
    @graphql.Parent() parent: CandidateCriterionRating
  ): Promise<Organization | null> {
    const result = await this.service.getOrganization(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => CandidatePersonalQuality, {
    nullable: true,
    name: "candidatePersonalQuality",
  })
  async resolveFieldCandidatePersonalQuality(
    @graphql.Parent() parent: CandidateCriterionRating
  ): Promise<CandidatePersonalQuality | null> {
    const result = await this.service.getCandidatePersonalQuality(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => CandidateTechnology, {
    nullable: true,
    name: "candidateTechnology",
  })
  async resolveFieldCandidateTechnology(
    @graphql.Parent() parent: CandidateCriterionRating
  ): Promise<CandidateTechnology | null> {
    const result = await this.service.getCandidateTechnology(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}