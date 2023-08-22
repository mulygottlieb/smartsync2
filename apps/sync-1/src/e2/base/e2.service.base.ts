/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, E2 } from "@prisma/client";

export class E2ServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.E2CountArgs>(
    args: Prisma.SelectSubset<T, Prisma.E2CountArgs>
  ): Promise<number> {
    return this.prisma.e2.count(args);
  }

  async findMany<T extends Prisma.E2FindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.E2FindManyArgs>
  ): Promise<E2[]> {
    return this.prisma.e2.findMany(args);
  }
  async findOne<T extends Prisma.E2FindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.E2FindUniqueArgs>
  ): Promise<E2 | null> {
    return this.prisma.e2.findUnique(args);
  }
  async create<T extends Prisma.E2CreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.E2CreateArgs>
  ): Promise<E2> {
    return this.prisma.e2.create<T>(args);
  }
  async update<T extends Prisma.E2UpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.E2UpdateArgs>
  ): Promise<E2> {
    return this.prisma.e2.update<T>(args);
  }
  async delete<T extends Prisma.E2DeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.E2DeleteArgs>
  ): Promise<E2> {
    return this.prisma.e2.delete(args);
  }
}