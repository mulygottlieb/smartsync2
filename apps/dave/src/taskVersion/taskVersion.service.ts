import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TaskVersionServiceBase } from "./base/taskVersion.service.base";

@Injectable()
export class TaskVersionService extends TaskVersionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
