import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { KnowledgeBaseAuthorServiceBase } from "./base/knowledgeBaseAuthor.service.base";

@Injectable()
export class KnowledgeBaseAuthorService extends KnowledgeBaseAuthorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
