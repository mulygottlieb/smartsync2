/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, E3 } from "@prisma/client";

export class E3ServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.E3CountArgs>(
    args: Prisma.SelectSubset<T, Prisma.E3CountArgs>
  ): Promise<number> {
    return this.prisma.e3.count(args);
  }

  async findMany<T extends Prisma.E3FindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.E3FindManyArgs>
  ): Promise<E3[]> {
    return this.prisma.e3.findMany(args);
  }
  async findOne<T extends Prisma.E3FindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.E3FindUniqueArgs>
  ): Promise<E3 | null> {
    return this.prisma.e3.findUnique(args);
  }
  async create<T extends Prisma.E3CreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.E3CreateArgs>
  ): Promise<E3> {
    return this.prisma.e3.create<T>(args);
  }
  async update<T extends Prisma.E3UpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.E3UpdateArgs>
  ): Promise<E3> {
    return this.prisma.e3.update<T>(args);
  }
  async delete<T extends Prisma.E3DeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.E3DeleteArgs>
  ): Promise<E3> {
    return this.prisma.e3.delete(args);
  }
}
