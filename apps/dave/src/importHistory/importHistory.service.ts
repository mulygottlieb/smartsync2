import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ImportHistoryServiceBase } from "./base/importHistory.service.base";

@Injectable()
export class ImportHistoryService extends ImportHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
