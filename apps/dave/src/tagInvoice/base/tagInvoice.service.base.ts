/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, TagInvoice, Tag, Invoice } from "@prisma/client";

export class TagInvoiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TagInvoiceCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagInvoiceCountArgs>
  ): Promise<number> {
    return this.prisma.tagInvoice.count(args);
  }

  async findMany<T extends Prisma.TagInvoiceFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagInvoiceFindManyArgs>
  ): Promise<TagInvoice[]> {
    return this.prisma.tagInvoice.findMany(args);
  }
  async findOne<T extends Prisma.TagInvoiceFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagInvoiceFindUniqueArgs>
  ): Promise<TagInvoice | null> {
    return this.prisma.tagInvoice.findUnique(args);
  }
  async create<T extends Prisma.TagInvoiceCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagInvoiceCreateArgs>
  ): Promise<TagInvoice> {
    return this.prisma.tagInvoice.create<T>(args);
  }
  async update<T extends Prisma.TagInvoiceUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagInvoiceUpdateArgs>
  ): Promise<TagInvoice> {
    return this.prisma.tagInvoice.update<T>(args);
  }
  async delete<T extends Prisma.TagInvoiceDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagInvoiceDeleteArgs>
  ): Promise<TagInvoice> {
    return this.prisma.tagInvoice.delete(args);
  }

  async getTag(parentId: string): Promise<Tag | null> {
    return this.prisma.tagInvoice
      .findUnique({
        where: { id: parentId },
      })
      .tag();
  }

  async getInvoice(parentId: string): Promise<Invoice | null> {
    return this.prisma.tagInvoice
      .findUnique({
        where: { id: parentId },
      })
      .invoice();
  }
}
