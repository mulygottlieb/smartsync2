import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IssueTypeServiceBase } from "./base/issueType.service.base";

@Injectable()
export class IssueTypeService extends IssueTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
