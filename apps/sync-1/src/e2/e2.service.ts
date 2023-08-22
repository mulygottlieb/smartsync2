import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E2ServiceBase } from "./base/e2.service.base";

@Injectable()
export class E2Service extends E2ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
