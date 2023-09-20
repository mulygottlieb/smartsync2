/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  CandidatePersonalQuality,
  CandidateCriterionRating,
  Tenant,
  CandidateInterview,
  Organization,
} from "@prisma/client";

export class CandidatePersonalQualityServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CandidatePersonalQualityCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.CandidatePersonalQualityCountArgs>
  ): Promise<number> {
    return this.prisma.candidatePersonalQuality.count(args);
  }

  async findMany<T extends Prisma.CandidatePersonalQualityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CandidatePersonalQualityFindManyArgs>
  ): Promise<CandidatePersonalQuality[]> {
    return this.prisma.candidatePersonalQuality.findMany(args);
  }
  async findOne<T extends Prisma.CandidatePersonalQualityFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CandidatePersonalQualityFindUniqueArgs>
  ): Promise<CandidatePersonalQuality | null> {
    return this.prisma.candidatePersonalQuality.findUnique(args);
  }
  async create<T extends Prisma.CandidatePersonalQualityCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CandidatePersonalQualityCreateArgs>
  ): Promise<CandidatePersonalQuality> {
    return this.prisma.candidatePersonalQuality.create<T>(args);
  }
  async update<T extends Prisma.CandidatePersonalQualityUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CandidatePersonalQualityUpdateArgs>
  ): Promise<CandidatePersonalQuality> {
    return this.prisma.candidatePersonalQuality.update<T>(args);
  }
  async delete<T extends Prisma.CandidatePersonalQualityDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CandidatePersonalQualityDeleteArgs>
  ): Promise<CandidatePersonalQuality> {
    return this.prisma.candidatePersonalQuality.delete(args);
  }

  async findCandidateCriterionRating(
    parentId: string,
    args: Prisma.CandidateCriterionRatingFindManyArgs
  ): Promise<CandidateCriterionRating[]> {
    return this.prisma.candidatePersonalQuality
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .candidateCriterionRating(args);
  }

  async getTenant(parentId: string): Promise<Tenant | null> {
    return this.prisma.candidatePersonalQuality
      .findUnique({
        where: { id: parentId },
      })
      .tenant();
  }

  async getCandidateInterview(
    parentId: string
  ): Promise<CandidateInterview | null> {
    return this.prisma.candidatePersonalQuality
      .findUnique({
        where: { id: parentId },
      })
      .candidateInterview();
  }

  async getOrganization(parentId: string): Promise<Organization | null> {
    return this.prisma.candidatePersonalQuality
      .findUnique({
        where: { id: parentId },
      })
      .organization();
  }
}
