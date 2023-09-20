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
import { TagPaymentService } from "../tagPayment.service";
import { TagPaymentCreateInput } from "./TagPaymentCreateInput";
import { TagPaymentWhereInput } from "./TagPaymentWhereInput";
import { TagPaymentWhereUniqueInput } from "./TagPaymentWhereUniqueInput";
import { TagPaymentFindManyArgs } from "./TagPaymentFindManyArgs";
import { TagPaymentUpdateInput } from "./TagPaymentUpdateInput";
import { TagPayment } from "./TagPayment";

export class TagPaymentControllerBase {
  constructor(protected readonly service: TagPaymentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TagPayment })
  async create(
    @common.Body() data: TagPaymentCreateInput
  ): Promise<TagPayment> {
    return await this.service.create({
      data: {
        ...data,

        payment: {
          connect: data.payment,
        },

        tag: {
          connect: data.tag,
        },
      },
      select: {
        payment: {
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
  @swagger.ApiOkResponse({ type: [TagPayment] })
  @ApiNestedQuery(TagPaymentFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<TagPayment[]> {
    const args = plainToClass(TagPaymentFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        payment: {
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
  @swagger.ApiOkResponse({ type: TagPayment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: TagPaymentWhereUniqueInput
  ): Promise<TagPayment | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        payment: {
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
  @swagger.ApiOkResponse({ type: TagPayment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: TagPaymentWhereUniqueInput,
    @common.Body() data: TagPaymentUpdateInput
  ): Promise<TagPayment | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          payment: {
            connect: data.payment,
          },

          tag: {
            connect: data.tag,
          },
        },
        select: {
          payment: {
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
  @swagger.ApiOkResponse({ type: TagPayment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: TagPaymentWhereUniqueInput
  ): Promise<TagPayment | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          payment: {
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
