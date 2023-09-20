import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChangelogServiceBase } from "./base/changelog.service.base";

@Injectable()
export class ChangelogService extends ChangelogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
