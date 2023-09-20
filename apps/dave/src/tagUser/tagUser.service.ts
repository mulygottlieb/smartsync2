import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TagUserServiceBase } from "./base/tagUser.service.base";

@Injectable()
export class TagUserService extends TagUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
