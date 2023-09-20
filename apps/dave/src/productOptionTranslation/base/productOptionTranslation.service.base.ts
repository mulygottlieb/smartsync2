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
  ProductOptionTranslation,
  Organization,
  Tenant,
  ProductOption,
} from "@prisma/client";

export class ProductOptionTranslationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ProductOptionTranslationCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductOptionTranslationCountArgs>
  ): Promise<number> {
    return this.prisma.productOptionTranslation.count(args);
  }

  async findMany<T extends Prisma.ProductOptionTranslationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductOptionTranslationFindManyArgs>
  ): Promise<ProductOptionTranslation[]> {
    return this.prisma.productOptionTranslation.findMany(args);
  }
  async findOne<T extends Prisma.ProductOptionTranslationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductOptionTranslationFindUniqueArgs>
  ): Promise<ProductOptionTranslation | null> {
    return this.prisma.productOptionTranslation.findUnique(args);
  }
  async create<T extends Prisma.ProductOptionTranslationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductOptionTranslationCreateArgs>
  ): Promise<ProductOptionTranslation> {
    return this.prisma.productOptionTranslation.create<T>(args);
  }
  async update<T extends Prisma.ProductOptionTranslationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductOptionTranslationUpdateArgs>
  ): Promise<ProductOptionTranslation> {
    return this.prisma.productOptionTranslation.update<T>(args);
  }
  async delete<T extends Prisma.ProductOptionTranslationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductOptionTranslationDeleteArgs>
  ): Promise<ProductOptionTranslation> {
    return this.prisma.productOptionTranslation.delete(args);
  }

  async getOrganization(parentId: string): Promise<Organization | null> {
    return this.prisma.productOptionTranslation
      .findUnique({
        where: { id: parentId },
      })
      .organization();
  }

  async getTenant(parentId: string): Promise<Tenant | null> {
    return this.prisma.productOptionTranslation
      .findUnique({
        where: { id: parentId },
      })
      .tenant();
  }

  async getProductOption(parentId: string): Promise<ProductOption | null> {
    return this.prisma.productOptionTranslation
      .findUnique({
        where: { id: parentId },
      })
      .productOption();
  }
}