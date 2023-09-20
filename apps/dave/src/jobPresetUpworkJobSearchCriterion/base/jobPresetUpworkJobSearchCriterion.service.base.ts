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
  JobPresetUpworkJobSearchCriterion,
  Tenant,
  JobPreset,
  JobSearchCategory,
  JobSearchOccupation,
  Organization,
} from "@prisma/client";

export class JobPresetUpworkJobSearchCriterionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.JobPresetUpworkJobSearchCriterionCountArgs>(
    args: Prisma.SelectSubset<
      T,
      Prisma.JobPresetUpworkJobSearchCriterionCountArgs
    >
  ): Promise<number> {
    return this.prisma.jobPresetUpworkJobSearchCriterion.count(args);
  }

  async findMany<
    T extends Prisma.JobPresetUpworkJobSearchCriterionFindManyArgs
  >(
    args: Prisma.SelectSubset<
      T,
      Prisma.JobPresetUpworkJobSearchCriterionFindManyArgs
    >
  ): Promise<JobPresetUpworkJobSearchCriterion[]> {
    return this.prisma.jobPresetUpworkJobSearchCriterion.findMany(args);
  }
  async findOne<
    T extends Prisma.JobPresetUpworkJobSearchCriterionFindUniqueArgs
  >(
    args: Prisma.SelectSubset<
      T,
      Prisma.JobPresetUpworkJobSearchCriterionFindUniqueArgs
    >
  ): Promise<JobPresetUpworkJobSearchCriterion | null> {
    return this.prisma.jobPresetUpworkJobSearchCriterion.findUnique(args);
  }
  async create<T extends Prisma.JobPresetUpworkJobSearchCriterionCreateArgs>(
    args: Prisma.SelectSubset<
      T,
      Prisma.JobPresetUpworkJobSearchCriterionCreateArgs
    >
  ): Promise<JobPresetUpworkJobSearchCriterion> {
    return this.prisma.jobPresetUpworkJobSearchCriterion.create<T>(args);
  }
  async update<T extends Prisma.JobPresetUpworkJobSearchCriterionUpdateArgs>(
    args: Prisma.SelectSubset<
      T,
      Prisma.JobPresetUpworkJobSearchCriterionUpdateArgs
    >
  ): Promise<JobPresetUpworkJobSearchCriterion> {
    return this.prisma.jobPresetUpworkJobSearchCriterion.update<T>(args);
  }
  async delete<T extends Prisma.JobPresetUpworkJobSearchCriterionDeleteArgs>(
    args: Prisma.SelectSubset<
      T,
      Prisma.JobPresetUpworkJobSearchCriterionDeleteArgs
    >
  ): Promise<JobPresetUpworkJobSearchCriterion> {
    return this.prisma.jobPresetUpworkJobSearchCriterion.delete(args);
  }

  async getTenant(parentId: string): Promise<Tenant | null> {
    return this.prisma.jobPresetUpworkJobSearchCriterion
      .findUnique({
        where: { id: parentId },
      })
      .tenant();
  }

  async getJobPreset(parentId: string): Promise<JobPreset | null> {
    return this.prisma.jobPresetUpworkJobSearchCriterion
      .findUnique({
        where: { id: parentId },
      })
      .jobPreset();
  }

  async getJobSearchCategory(
    parentId: string
  ): Promise<JobSearchCategory | null> {
    return this.prisma.jobPresetUpworkJobSearchCriterion
      .findUnique({
        where: { id: parentId },
      })
      .jobSearchCategory();
  }

  async getJobSearchOccupation(
    parentId: string
  ): Promise<JobSearchOccupation | null> {
    return this.prisma.jobPresetUpworkJobSearchCriterion
      .findUnique({
        where: { id: parentId },
      })
      .jobSearchOccupation();
  }

  async getOrganization(parentId: string): Promise<Organization | null> {
    return this.prisma.jobPresetUpworkJobSearchCriterion
      .findUnique({
        where: { id: parentId },
      })
      .organization();
  }
}