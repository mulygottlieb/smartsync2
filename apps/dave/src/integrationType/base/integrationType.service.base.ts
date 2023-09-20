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
  IntegrationType,
  IntegrationIntegrationType,
} from "@prisma/client";

export class IntegrationTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.IntegrationTypeCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.IntegrationTypeCountArgs>
  ): Promise<number> {
    return this.prisma.integrationType.count(args);
  }

  async findMany<T extends Prisma.IntegrationTypeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.IntegrationTypeFindManyArgs>
  ): Promise<IntegrationType[]> {
    return this.prisma.integrationType.findMany(args);
  }
  async findOne<T extends Prisma.IntegrationTypeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.IntegrationTypeFindUniqueArgs>
  ): Promise<IntegrationType | null> {
    return this.prisma.integrationType.findUnique(args);
  }
  async create<T extends Prisma.IntegrationTypeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.IntegrationTypeCreateArgs>
  ): Promise<IntegrationType> {
    return this.prisma.integrationType.create<T>(args);
  }
  async update<T extends Prisma.IntegrationTypeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.IntegrationTypeUpdateArgs>
  ): Promise<IntegrationType> {
    return this.prisma.integrationType.update<T>(args);
  }
  async delete<T extends Prisma.IntegrationTypeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.IntegrationTypeDeleteArgs>
  ): Promise<IntegrationType> {
    return this.prisma.integrationType.delete(args);
  }

  async findIntegrationIntegrationType(
    parentId: string,
    args: Prisma.IntegrationIntegrationTypeFindManyArgs
  ): Promise<IntegrationIntegrationType[]> {
    return this.prisma.integrationType
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .integrationIntegrationType(args);
  }
}
