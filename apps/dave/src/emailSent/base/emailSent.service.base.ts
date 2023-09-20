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
  EmailSent,
  Tenant,
  User,
  Organization,
  EmailTemplate,
} from "@prisma/client";

export class EmailSentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.EmailSentCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmailSentCountArgs>
  ): Promise<number> {
    return this.prisma.emailSent.count(args);
  }

  async findMany<T extends Prisma.EmailSentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmailSentFindManyArgs>
  ): Promise<EmailSent[]> {
    return this.prisma.emailSent.findMany(args);
  }
  async findOne<T extends Prisma.EmailSentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmailSentFindUniqueArgs>
  ): Promise<EmailSent | null> {
    return this.prisma.emailSent.findUnique(args);
  }
  async create<T extends Prisma.EmailSentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmailSentCreateArgs>
  ): Promise<EmailSent> {
    return this.prisma.emailSent.create<T>(args);
  }
  async update<T extends Prisma.EmailSentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmailSentUpdateArgs>
  ): Promise<EmailSent> {
    return this.prisma.emailSent.update<T>(args);
  }
  async delete<T extends Prisma.EmailSentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmailSentDeleteArgs>
  ): Promise<EmailSent> {
    return this.prisma.emailSent.delete(args);
  }

  async getTenant(parentId: string): Promise<Tenant | null> {
    return this.prisma.emailSent
      .findUnique({
        where: { id: parentId },
      })
      .tenant();
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.emailSent
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }

  async getOrganization(parentId: string): Promise<Organization | null> {
    return this.prisma.emailSent
      .findUnique({
        where: { id: parentId },
      })
      .organization();
  }

  async getEmailTemplate(parentId: string): Promise<EmailTemplate | null> {
    return this.prisma.emailSent
      .findUnique({
        where: { id: parentId },
      })
      .emailTemplate();
  }
}
