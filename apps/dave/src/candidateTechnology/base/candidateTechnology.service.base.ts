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
  CandidateTechnology,
  CandidateCriterionRating,
  CandidateInterview,
  Organization,
  Tenant,
} from "@prisma/client";

export class CandidateTechnologyServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CandidateTechnologyCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.CandidateTechnologyCountArgs>
  ): Promise<number> {
    return this.prisma.candidateTechnology.count(args);
  }

  async findMany<T extends Prisma.CandidateTechnologyFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CandidateTechnologyFindManyArgs>
  ): Promise<CandidateTechnology[]> {
    return this.prisma.candidateTechnology.findMany(args);
  }
  async findOne<T extends Prisma.CandidateTechnologyFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CandidateTechnologyFindUniqueArgs>
  ): Promise<CandidateTechnology | null> {
    return this.prisma.candidateTechnology.findUnique(args);
  }
  async create<T extends Prisma.CandidateTechnologyCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CandidateTechnologyCreateArgs>
  ): Promise<CandidateTechnology> {
    return this.prisma.candidateTechnology.create<T>(args);
  }
  async update<T extends Prisma.CandidateTechnologyUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CandidateTechnologyUpdateArgs>
  ): Promise<CandidateTechnology> {
    return this.prisma.candidateTechnology.update<T>(args);
  }
  async delete<T extends Prisma.CandidateTechnologyDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CandidateTechnologyDeleteArgs>
  ): Promise<CandidateTechnology> {
    return this.prisma.candidateTechnology.delete(args);
  }

  async findCandidateCriterionRating(
    parentId: string,
    args: Prisma.CandidateCriterionRatingFindManyArgs
  ): Promise<CandidateCriterionRating[]> {
    return this.prisma.candidateTechnology
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .candidateCriterionRating(args);
  }

  async getCandidateInterview(
    parentId: string
  ): Promise<CandidateInterview | null> {
    return this.prisma.candidateTechnology
      .findUnique({
        where: { id: parentId },
      })
      .candidateInterview();
  }

  async getOrganization(parentId: string): Promise<Organization | null> {
    return this.prisma.candidateTechnology
      .findUnique({
        where: { id: parentId },
      })
      .organization();
  }

  async getTenant(parentId: string): Promise<Tenant | null> {
    return this.prisma.candidateTechnology
      .findUnique({
        where: { id: parentId },
      })
      .tenant();
  }
}