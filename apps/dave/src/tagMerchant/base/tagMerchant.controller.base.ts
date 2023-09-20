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
import { TagMerchantService } from "../tagMerchant.service";
import { TagMerchantCreateInput } from "./TagMerchantCreateInput";
import { TagMerchantWhereInput } from "./TagMerchantWhereInput";
import { TagMerchantWhereUniqueInput } from "./TagMerchantWhereUniqueInput";
import { TagMerchantFindManyArgs } from "./TagMerchantFindManyArgs";
import { TagMerchantUpdateInput } from "./TagMerchantUpdateInput";
import { TagMerchant } from "./TagMerchant";

export class TagMerchantControllerBase {
  constructor(protected readonly service: TagMerchantService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TagMerchant })
  async create(
    @common.Body() data: TagMerchantCreateInput
  ): Promise<TagMerchant> {
    return await this.service.create({
      data: {
        ...data,

        tag: {
          connect: data.tag,
        },

        merchant: {
          connect: data.merchant,
        },
      },
      select: {
        tag: {
          select: {
            id: true,
          },
        },

        merchant: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [TagMerchant] })
  @ApiNestedQuery(TagMerchantFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<TagMerchant[]> {
    const args = plainToClass(TagMerchantFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        tag: {
          select: {
            id: true,
          },
        },

        merchant: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: TagMerchant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: TagMerchantWhereUniqueInput
  ): Promise<TagMerchant | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        tag: {
          select: {
            id: true,
          },
        },

        merchant: {
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
  @swagger.ApiOkResponse({ type: TagMerchant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: TagMerchantWhereUniqueInput,
    @common.Body() data: TagMerchantUpdateInput
  ): Promise<TagMerchant | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          tag: {
            connect: data.tag,
          },

          merchant: {
            connect: data.merchant,
          },
        },
        select: {
          tag: {
            select: {
              id: true,
            },
          },

          merchant: {
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
  @swagger.ApiOkResponse({ type: TagMerchant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: TagMerchantWhereUniqueInput
  ): Promise<TagMerchant | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          tag: {
            select: {
              id: true,
            },
          },

          merchant: {
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