import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ImportRecordServiceBase } from "./base/importRecord.service.base";

@Injectable()
export class ImportRecordService extends ImportRecordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
