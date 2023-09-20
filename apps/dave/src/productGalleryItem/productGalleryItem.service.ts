import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductGalleryItemServiceBase } from "./base/productGalleryItem.service.base";

@Injectable()
export class ProductGalleryItemService extends ProductGalleryItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
