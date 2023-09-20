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
import { TagOrganizationContactService } from "../tagOrganizationContact.service";
import { TagOrganizationContactCreateInput } from "./TagOrganizationContactCreateInput";
import { TagOrganizationContactWhereInput } from "./TagOrganizationContactWhereInput";
import { TagOrganizationContactWhereUniqueInput } from "./TagOrganizationContactWhereUniqueInput";
import { TagOrganizationContactFindManyArgs } from "./TagOrganizationContactFindManyArgs";
import { TagOrganizationContactUpdateInput } from "./TagOrganizationContactUpdateInput";
import { TagOrganizationContact } from "./TagOrganizationContact";

export class TagOrganizationContactControllerBase {
  constructor(protected readonly service: TagOrganizationContactService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TagOrganizationContact })
  async create(
    @common.Body() data: TagOrganizationContactCreateInput
  ): Promise<TagOrganizationContact> {
    return await this.service.create({
      data: {
        ...data,

        organizationContact: {
          connect: data.organizationContact,
        },

        tag: {
          connect: data.tag,
        },
      },
      select: {
        organizationContact: {
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
  @swagger.ApiOkResponse({ type: [TagOrganizationContact] })
  @ApiNestedQuery(TagOrganizationContactFindManyArgs)
  async findMany(
    @common.Req() request: Request
  ): Promise<TagOrganizationContact[]> {
    const args = plainToClass(
      TagOrganizationContactFindManyArgs,
      request.query
    );
    return this.service.findMany({
      ...args,
      select: {
        organizationContact: {
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
  @swagger.ApiOkResponse({ type: TagOrganizationContact })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: TagOrganizationContactWhereUniqueInput
  ): Promise<TagOrganizationContact | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        organizationContact: {
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
  @swagger.ApiOkResponse({ type: TagOrganizationContact })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: TagOrganizationContactWhereUniqueInput,
    @common.Body() data: TagOrganizationContactUpdateInput
  ): Promise<TagOrganizationContact | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          organizationContact: {
            connect: data.organizationContact,
          },

          tag: {
            connect: data.tag,
          },
        },
        select: {
          organizationContact: {
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
  @swagger.ApiOkResponse({ type: TagOrganizationContact })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: TagOrganizationContactWhereUniqueInput
  ): Promise<TagOrganizationContact | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          organizationContact: {
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