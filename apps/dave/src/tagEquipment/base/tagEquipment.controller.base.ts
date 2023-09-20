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
import { TagEquipmentService } from "../tagEquipment.service";
import { TagEquipmentCreateInput } from "./TagEquipmentCreateInput";
import { TagEquipmentWhereInput } from "./TagEquipmentWhereInput";
import { TagEquipmentWhereUniqueInput } from "./TagEquipmentWhereUniqueInput";
import { TagEquipmentFindManyArgs } from "./TagEquipmentFindManyArgs";
import { TagEquipmentUpdateInput } from "./TagEquipmentUpdateInput";
import { TagEquipment } from "./TagEquipment";

export class TagEquipmentControllerBase {
  constructor(protected readonly service: TagEquipmentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TagEquipment })
  async create(
    @common.Body() data: TagEquipmentCreateInput
  ): Promise<TagEquipment> {
    return await this.service.create({
      data: {
        ...data,

        tag: {
          connect: data.tag,
        },

        equipment: {
          connect: data.equipment,
        },
      },
      select: {
        tag: {
          select: {
            id: true,
          },
        },

        equipment: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [TagEquipment] })
  @ApiNestedQuery(TagEquipmentFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<TagEquipment[]> {
    const args = plainToClass(TagEquipmentFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        tag: {
          select: {
            id: true,
          },
        },

        equipment: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: TagEquipment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: TagEquipmentWhereUniqueInput
  ): Promise<TagEquipment | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        tag: {
          select: {
            id: true,
          },
        },

        equipment: {
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
  @swagger.ApiOkResponse({ type: TagEquipment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: TagEquipmentWhereUniqueInput,
    @common.Body() data: TagEquipmentUpdateInput
  ): Promise<TagEquipment | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          tag: {
            connect: data.tag,
          },

          equipment: {
            connect: data.equipment,
          },
        },
        select: {
          tag: {
            select: {
              id: true,
            },
          },

          equipment: {
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
  @swagger.ApiOkResponse({ type: TagEquipment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: TagEquipmentWhereUniqueInput
  ): Promise<TagEquipment | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          tag: {
            select: {
              id: true,
            },
          },

          equipment: {
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