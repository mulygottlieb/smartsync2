/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { TagWarehouseService } from "../tagWarehouse.service";
import { TagWarehouseCreateInput } from "./TagWarehouseCreateInput";
import { TagWarehouseWhereInput } from "./TagWarehouseWhereInput";
import { TagWarehouseWhereUniqueInput } from "./TagWarehouseWhereUniqueInput";
import { TagWarehouseFindManyArgs } from "./TagWarehouseFindManyArgs";
import { TagWarehouseUpdateInput } from "./TagWarehouseUpdateInput";
import { TagWarehouse } from "./TagWarehouse";

export class TagWarehouseControllerBase {
  constructor(protected readonly service: TagWarehouseService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TagWarehouse })
  async create(
    @common.Body() data: TagWarehouseCreateInput
  ): Promise<TagWarehouse> {
    return await this.service.create({
      data: {
        ...data,

        warehouse: {
          connect: data.warehouse,
        },

        tag: {
          connect: data.tag,
        },
      },
      select: {
        warehouse: {
          select: {
            id: true,
          },
        },

        tag: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [TagWarehouse] })
  @ApiNestedQuery(TagWarehouseFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<TagWarehouse[]> {
    const args = plainToClass(TagWarehouseFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        warehouse: {
          select: {
            id: true,
          },
        },

        tag: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: TagWarehouse })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: TagWarehouseWhereUniqueInput
  ): Promise<TagWarehouse | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        warehouse: {
          select: {
            id: true,
          },
        },

        tag: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: TagWarehouse })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: TagWarehouseWhereUniqueInput,
    @common.Body() data: TagWarehouseUpdateInput
  ): Promise<TagWarehouse | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          warehouse: {
            connect: data.warehouse,
          },

          tag: {
            connect: data.tag,
          },
        },
        select: {
          warehouse: {
            select: {
              id: true,
            },
          },

          tag: {
            select: {
              id: true,
            },
          },

          id: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: TagWarehouse })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: TagWarehouseWhereUniqueInput
  ): Promise<TagWarehouse | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          warehouse: {
            select: {
              id: true,
            },
          },

          tag: {
            select: {
              id: true,
            },
          },

          id: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}