import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ImageAssetServiceBase } from "./base/imageAsset.service.base";

@Injectable()
export class ImageAssetService extends ImageAssetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
