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
  JobSearchOccupation,
  EmployeeUpworkJobSearchCriterion,
  JobPresetUpworkJobSearchCriterion,
  Organization,
  Tenant,
} from "@prisma/client";

export class JobSearchOccupationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.JobSearchOccupationCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobSearchOccupationCountArgs>
  ): Promise<number> {
    return this.prisma.jobSearchOccupation.count(args);
  }

  async findMany<T extends Prisma.JobSearchOccupationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobSearchOccupationFindManyArgs>
  ): Promise<JobSearchOccupation[]> {
    return this.prisma.jobSearchOccupation.findMany(args);
  }
  async findOne<T extends Prisma.JobSearchOccupationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobSearchOccupationFindUniqueArgs>
  ): Promise<JobSearchOccupation | null> {
    return this.prisma.jobSearchOccupation.findUnique(args);
  }
  async create<T extends Prisma.JobSearchOccupationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobSearchOccupationCreateArgs>
  ): Promise<JobSearchOccupation> {
    return this.prisma.jobSearchOccupation.create<T>(args);
  }
  async update<T extends Prisma.JobSearchOccupationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobSearchOccupationUpdateArgs>
  ): Promise<JobSearchOccupation> {
    return this.prisma.jobSearchOccupation.update<T>(args);
  }
  async delete<T extends Prisma.JobSearchOccupationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobSearchOccupationDeleteArgs>
  ): Promise<JobSearchOccupation> {
    return this.prisma.jobSearchOccupation.delete(args);
  }

  async findEmployeeUpworkJobSearchCriterion(
    parentId: string,
    args: Prisma.EmployeeUpworkJobSearchCriterionFindManyArgs
  ): Promise<EmployeeUpworkJobSearchCriterion[]> {
    return this.prisma.jobSearchOccupation
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .employeeUpworkJobSearchCriterion(args);
  }

  async findJobPresetUpworkJobSearchCriterion(
    parentId: string,
    args: Prisma.JobPresetUpworkJobSearchCriterionFindManyArgs
  ): Promise<JobPresetUpworkJobSearchCriterion[]> {
    return this.prisma.jobSearchOccupation
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .jobPresetUpworkJobSearchCriterion(args);
  }

  async getOrganization(parentId: string): Promise<Organization | null> {
    return this.prisma.jobSearchOccupation
      .findUnique({
        where: { id: parentId },
      })
      .organization();
  }

  async getTenant(parentId: string): Promise<Tenant | null> {
    return this.prisma.jobSearchOccupation
      .findUnique({
        where: { id: parentId },
      })
      .tenant();
  }
}
