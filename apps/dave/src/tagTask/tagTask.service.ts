import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TagTaskServiceBase } from "./base/tagTask.service.base";

@Injectable()
export class TagTaskService extends TagTaskServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
