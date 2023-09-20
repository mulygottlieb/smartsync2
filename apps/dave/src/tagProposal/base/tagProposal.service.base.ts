/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, TagProposal, Proposal, Tag } from "@prisma/client";

export class TagProposalServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TagProposalCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagProposalCountArgs>
  ): Promise<number> {
    return this.prisma.tagProposal.count(args);
  }

  async findMany<T extends Prisma.TagProposalFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagProposalFindManyArgs>
  ): Promise<TagProposal[]> {
    return this.prisma.tagProposal.findMany(args);
  }
  async findOne<T extends Prisma.TagProposalFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagProposalFindUniqueArgs>
  ): Promise<TagProposal | null> {
    return this.prisma.tagProposal.findUnique(args);
  }
  async create<T extends Prisma.TagProposalCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagProposalCreateArgs>
  ): Promise<TagProposal> {
    return this.prisma.tagProposal.create<T>(args);
  }
  async update<T extends Prisma.TagProposalUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagProposalUpdateArgs>
  ): Promise<TagProposal> {
    return this.prisma.tagProposal.update<T>(args);
  }
  async delete<T extends Prisma.TagProposalDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagProposalDeleteArgs>
  ): Promise<TagProposal> {
    return this.prisma.tagProposal.delete(args);
  }

  async getProposal(parentId: string): Promise<Proposal | null> {
    return this.prisma.tagProposal
      .findUnique({
        where: { id: parentId },
      })
      .proposal();
  }

  async getTag(parentId: string): Promise<Tag | null> {
    return this.prisma.tagProposal
      .findUnique({
        where: { id: parentId },
      })
      .tag();
  }
}