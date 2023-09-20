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
import { TagRequestApprovalService } from "../tagRequestApproval.service";
import { TagRequestApprovalCreateInput } from "./TagRequestApprovalCreateInput";
import { TagRequestApprovalWhereInput } from "./TagRequestApprovalWhereInput";
import { TagRequestApprovalWhereUniqueInput } from "./TagRequestApprovalWhereUniqueInput";
import { TagRequestApprovalFindManyArgs } from "./TagRequestApprovalFindManyArgs";
import { TagRequestApprovalUpdateInput } from "./TagRequestApprovalUpdateInput";
import { TagRequestApproval } from "./TagRequestApproval";

export class TagRequestApprovalControllerBase {
  constructor(protected readonly service: TagRequestApprovalService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TagRequestApproval })
  async create(
    @common.Body() data: TagRequestApprovalCreateInput
  ): Promise<TagRequestApproval> {
    return await this.service.create({
      data: {
        ...data,

        tag: {
          connect: data.tag,
        },

        requestApproval: {
          connect: data.requestApproval,
        },
      },
      select: {
        tag: {
          select: {
            id: true,
          },
        },

        requestApproval: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [TagRequestApproval] })
  @ApiNestedQuery(TagRequestApprovalFindManyArgs)
  async findMany(
    @common.Req() request: Request
  ): Promise<TagRequestApproval[]> {
    const args = plainToClass(TagRequestApprovalFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        tag: {
          select: {
            id: true,
          },
        },

        requestApproval: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: TagRequestApproval })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: TagRequestApprovalWhereUniqueInput
  ): Promise<TagRequestApproval | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        tag: {
          select: {
            id: true,
          },
        },

        requestApproval: {
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
  @swagger.ApiOkResponse({ type: TagRequestApproval })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: TagRequestApprovalWhereUniqueInput,
    @common.Body() data: TagRequestApprovalUpdateInput
  ): Promise<TagRequestApproval | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          tag: {
            connect: data.tag,
          },

          requestApproval: {
            connect: data.requestApproval,
          },
        },
        select: {
          tag: {
            select: {
              id: true,
            },
          },

          requestApproval: {
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
  @swagger.ApiOkResponse({ type: TagRequestApproval })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: TagRequestApprovalWhereUniqueInput
  ): Promise<TagRequestApproval | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          tag: {
            select: {
              id: true,
            },
          },

          requestApproval: {
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
