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
import { TagUserService } from "../tagUser.service";
import { TagUserCreateInput } from "./TagUserCreateInput";
import { TagUserWhereInput } from "./TagUserWhereInput";
import { TagUserWhereUniqueInput } from "./TagUserWhereUniqueInput";
import { TagUserFindManyArgs } from "./TagUserFindManyArgs";
import { TagUserUpdateInput } from "./TagUserUpdateInput";
import { TagUser } from "./TagUser";

export class TagUserControllerBase {
  constructor(protected readonly service: TagUserService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TagUser })
  async create(@common.Body() data: TagUserCreateInput): Promise<TagUser> {
    return await this.service.create({
      data: {
        ...data,

        user: {
          connect: data.user,
        },

        tag: {
          connect: data.tag,
        },
      },
      select: {
        user: {
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
  @swagger.ApiOkResponse({ type: [TagUser] })
  @ApiNestedQuery(TagUserFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<TagUser[]> {
    const args = plainToClass(TagUserFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        user: {
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
  @swagger.ApiOkResponse({ type: TagUser })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: TagUserWhereUniqueInput
  ): Promise<TagUser | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        user: {
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
  @swagger.ApiOkResponse({ type: TagUser })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: TagUserWhereUniqueInput,
    @common.Body() data: TagUserUpdateInput
  ): Promise<TagUser | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          user: {
            connect: data.user,
          },

          tag: {
            connect: data.tag,
          },
        },
        select: {
          user: {
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
  @swagger.ApiOkResponse({ type: TagUser })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: TagUserWhereUniqueInput
  ): Promise<TagUser | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          user: {
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
