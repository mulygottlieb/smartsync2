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
  PipelineStage,
  Deal,
  Organization,
  Tenant,
  Pipeline,
} from "@prisma/client";

export class PipelineStageServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PipelineStageCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.PipelineStageCountArgs>
  ): Promise<number> {
    return this.prisma.pipelineStage.count(args);
  }

  async findMany<T extends Prisma.PipelineStageFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PipelineStageFindManyArgs>
  ): Promise<PipelineStage[]> {
    return this.prisma.pipelineStage.findMany(args);
  }
  async findOne<T extends Prisma.PipelineStageFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PipelineStageFindUniqueArgs>
  ): Promise<PipelineStage | null> {
    return this.prisma.pipelineStage.findUnique(args);
  }
  async create<T extends Prisma.PipelineStageCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PipelineStageCreateArgs>
  ): Promise<PipelineStage> {
    return this.prisma.pipelineStage.create<T>(args);
  }
  async update<T extends Prisma.PipelineStageUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PipelineStageUpdateArgs>
  ): Promise<PipelineStage> {
    return this.prisma.pipelineStage.update<T>(args);
  }
  async delete<T extends Prisma.PipelineStageDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PipelineStageDeleteArgs>
  ): Promise<PipelineStage> {
    return this.prisma.pipelineStage.delete(args);
  }

  async findDeal(
    parentId: string,
    args: Prisma.DealFindManyArgs
  ): Promise<Deal[]> {
    return this.prisma.pipelineStage
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .deal(args);
  }

  async getOrganization(parentId: string): Promise<Organization | null> {
    return this.prisma.pipelineStage
      .findUnique({
        where: { id: parentId },
      })
      .organization();
  }

  async getTenant(parentId: string): Promise<Tenant | null> {
    return this.prisma.pipelineStage
      .findUnique({
        where: { id: parentId },
      })
      .tenant();
  }

  async getPipeline(parentId: string): Promise<Pipeline | null> {
    return this.prisma.pipelineStage
      .findUnique({
        where: { id: parentId },
      })
      .pipeline();
  }
}