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
  GoalTemplate,
  KeyResultTemplate,
  Organization,
  Tenant,
} from "@prisma/client";

export class GoalTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.GoalTemplateCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.GoalTemplateCountArgs>
  ): Promise<number> {
    return this.prisma.goalTemplate.count(args);
  }

  async findMany<T extends Prisma.GoalTemplateFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.GoalTemplateFindManyArgs>
  ): Promise<GoalTemplate[]> {
    return this.prisma.goalTemplate.findMany(args);
  }
  async findOne<T extends Prisma.GoalTemplateFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.GoalTemplateFindUniqueArgs>
  ): Promise<GoalTemplate | null> {
    return this.prisma.goalTemplate.findUnique(args);
  }
  async create<T extends Prisma.GoalTemplateCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GoalTemplateCreateArgs>
  ): Promise<GoalTemplate> {
    return this.prisma.goalTemplate.create<T>(args);
  }
  async update<T extends Prisma.GoalTemplateUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GoalTemplateUpdateArgs>
  ): Promise<GoalTemplate> {
    return this.prisma.goalTemplate.update<T>(args);
  }
  async delete<T extends Prisma.GoalTemplateDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.GoalTemplateDeleteArgs>
  ): Promise<GoalTemplate> {
    return this.prisma.goalTemplate.delete(args);
  }

  async findKeyResultTemplate(
    parentId: string,
    args: Prisma.KeyResultTemplateFindManyArgs
  ): Promise<KeyResultTemplate[]> {
    return this.prisma.goalTemplate
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .keyResultTemplate(args);
  }

  async getOrganization(parentId: string): Promise<Organization | null> {
    return this.prisma.goalTemplate
      .findUnique({
        where: { id: parentId },
      })
      .organization();
  }

  async getTenant(parentId: string): Promise<Tenant | null> {
    return this.prisma.goalTemplate
      .findUnique({
        where: { id: parentId },
      })
      .tenant();
  }
}