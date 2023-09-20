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
  AccountingTemplate,
  Tenant,
  Organization,
} from "@prisma/client";

export class AccountingTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.AccountingTemplateCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountingTemplateCountArgs>
  ): Promise<number> {
    return this.prisma.accountingTemplate.count(args);
  }

  async findMany<T extends Prisma.AccountingTemplateFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountingTemplateFindManyArgs>
  ): Promise<AccountingTemplate[]> {
    return this.prisma.accountingTemplate.findMany(args);
  }
  async findOne<T extends Prisma.AccountingTemplateFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountingTemplateFindUniqueArgs>
  ): Promise<AccountingTemplate | null> {
    return this.prisma.accountingTemplate.findUnique(args);
  }
  async create<T extends Prisma.AccountingTemplateCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountingTemplateCreateArgs>
  ): Promise<AccountingTemplate> {
    return this.prisma.accountingTemplate.create<T>(args);
  }
  async update<T extends Prisma.AccountingTemplateUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountingTemplateUpdateArgs>
  ): Promise<AccountingTemplate> {
    return this.prisma.accountingTemplate.update<T>(args);
  }
  async delete<T extends Prisma.AccountingTemplateDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountingTemplateDeleteArgs>
  ): Promise<AccountingTemplate> {
    return this.prisma.accountingTemplate.delete(args);
  }

  async getTenant(parentId: string): Promise<Tenant | null> {
    return this.prisma.accountingTemplate
      .findUnique({
        where: { id: parentId },
      })
      .tenant();
  }

  async getOrganization(parentId: string): Promise<Organization | null> {
    return this.prisma.accountingTemplate
      .findUnique({
        where: { id: parentId },
      })
      .organization();
  }
}