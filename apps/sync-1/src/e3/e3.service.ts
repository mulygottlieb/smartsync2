import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E3ServiceBase } from "./base/e3.service.base";

@Injectable()
export class E3Service extends E3ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
