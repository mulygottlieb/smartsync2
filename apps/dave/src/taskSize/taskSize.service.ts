import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TaskSizeServiceBase } from "./base/taskSize.service.base";

@Injectable()
export class TaskSizeService extends TaskSizeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
