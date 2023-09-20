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
  Merchant,
  TagMerchant,
  WarehouseMerchant,
  ImageAsset,
  Tenant,
  Organization,
  Contact,
} from "@prisma/client";

export class MerchantServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MerchantCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.MerchantCountArgs>
  ): Promise<number> {
    return this.prisma.merchant.count(args);
  }

  async findMany<T extends Prisma.MerchantFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MerchantFindManyArgs>
  ): Promise<Merchant[]> {
    return this.prisma.merchant.findMany(args);
  }
  async findOne<T extends Prisma.MerchantFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MerchantFindUniqueArgs>
  ): Promise<Merchant | null> {
    return this.prisma.merchant.findUnique(args);
  }
  async create<T extends Prisma.MerchantCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MerchantCreateArgs>
  ): Promise<Merchant> {
    return this.prisma.merchant.create<T>(args);
  }
  async update<T extends Prisma.MerchantUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MerchantUpdateArgs>
  ): Promise<Merchant> {
    return this.prisma.merchant.update<T>(args);
  }
  async delete<T extends Prisma.MerchantDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MerchantDeleteArgs>
  ): Promise<Merchant> {
    return this.prisma.merchant.delete(args);
  }

  async findTagMerchant(
    parentId: string,
    args: Prisma.TagMerchantFindManyArgs
  ): Promise<TagMerchant[]> {
    return this.prisma.merchant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .tagMerchant(args);
  }

  async findWarehouseMerchant(
    parentId: string,
    args: Prisma.WarehouseMerchantFindManyArgs
  ): Promise<WarehouseMerchant[]> {
    return this.prisma.merchant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .warehouseMerchant(args);
  }

  async getImageAsset(parentId: string): Promise<ImageAsset | null> {
    return this.prisma.merchant
      .findUnique({
        where: { id: parentId },
      })
      .imageAsset();
  }

  async getTenant(parentId: string): Promise<Tenant | null> {
    return this.prisma.merchant
      .findUnique({
        where: { id: parentId },
      })
      .tenant();
  }

  async getOrganization(parentId: string): Promise<Organization | null> {
    return this.prisma.merchant
      .findUnique({
        where: { id: parentId },
      })
      .organization();
  }

  async getContact(parentId: string): Promise<Contact | null> {
    return this.prisma.merchant
      .findUnique({
        where: { id: parentId },
      })
      .contact();
  }
}
