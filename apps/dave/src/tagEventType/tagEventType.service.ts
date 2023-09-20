import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TagEventTypeServiceBase } from "./base/tagEventType.service.base";

@Injectable()
export class TagEventTypeService extends TagEventTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
