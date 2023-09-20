import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TagEmployeeServiceBase } from "./base/tagEmployee.service.base";

@Injectable()
export class TagEmployeeService extends TagEmployeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
