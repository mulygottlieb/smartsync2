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
  CandidateExperience,
  Tenant,
  Organization,
  Candidate,
} from "@prisma/client";

export class CandidateExperienceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CandidateExperienceCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.CandidateExperienceCountArgs>
  ): Promise<number> {
    return this.prisma.candidateExperience.count(args);
  }

  async findMany<T extends Prisma.CandidateExperienceFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CandidateExperienceFindManyArgs>
  ): Promise<CandidateExperience[]> {
    return this.prisma.candidateExperience.findMany(args);
  }
  async findOne<T extends Prisma.CandidateExperienceFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CandidateExperienceFindUniqueArgs>
  ): Promise<CandidateExperience | null> {
    return this.prisma.candidateExperience.findUnique(args);
  }
  async create<T extends Prisma.CandidateExperienceCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CandidateExperienceCreateArgs>
  ): Promise<CandidateExperience> {
    return this.prisma.candidateExperience.create<T>(args);
  }
  async update<T extends Prisma.CandidateExperienceUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CandidateExperienceUpdateArgs>
  ): Promise<CandidateExperience> {
    return this.prisma.candidateExperience.update<T>(args);
  }
  async delete<T extends Prisma.CandidateExperienceDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CandidateExperienceDeleteArgs>
  ): Promise<CandidateExperience> {
    return this.prisma.candidateExperience.delete(args);
  }

  async getTenant(parentId: string): Promise<Tenant | null> {
    return this.prisma.candidateExperience
      .findUnique({
        where: { id: parentId },
      })
      .tenant();
  }

  async getOrganization(parentId: string): Promise<Organization | null> {
    return this.prisma.candidateExperience
      .findUnique({
        where: { id: parentId },
      })
      .organization();
  }

  async getCandidate(parentId: string): Promise<Candidate | null> {
    return this.prisma.candidateExperience
      .findUnique({
        where: { id: parentId },
      })
      .candidate();
  }
}
