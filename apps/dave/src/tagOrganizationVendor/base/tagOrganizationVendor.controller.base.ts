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
import { TagOrganizationVendorService } from "../tagOrganizationVendor.service";
import { TagOrganizationVendorCreateInput } from "./TagOrganizationVendorCreateInput";
import { TagOrganizationVendorWhereInput } from "./TagOrganizationVendorWhereInput";
import { TagOrganizationVendorWhereUniqueInput } from "./TagOrganizationVendorWhereUniqueInput";
import { TagOrganizationVendorFindManyArgs } from "./TagOrganizationVendorFindManyArgs";
import { TagOrganizationVendorUpdateInput } from "./TagOrganizationVendorUpdateInput";
import { TagOrganizationVendor } from "./TagOrganizationVendor";

export class TagOrganizationVendorControllerBase {
  constructor(protected readonly service: TagOrganizationVendorService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TagOrganizationVendor })
  async create(
    @common.Body() data: TagOrganizationVendorCreateInput
  ): Promise<TagOrganizationVendor> {
    return await this.service.create({
      data: {
        ...data,

        organizationVendor: {
          connect: data.organizationVendor,
        },

        tag: {
          connect: data.tag,
        },
      },
      select: {
        organizationVendor: {
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
  @swagger.ApiOkResponse({ type: [TagOrganizationVendor] })
  @ApiNestedQuery(TagOrganizationVendorFindManyArgs)
  async findMany(
    @common.Req() request: Request
  ): Promise<TagOrganizationVendor[]> {
    const args = plainToClass(TagOrganizationVendorFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        organizationVendor: {
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
  @swagger.ApiOkResponse({ type: TagOrganizationVendor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: TagOrganizationVendorWhereUniqueInput
  ): Promise<TagOrganizationVendor | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        organizationVendor: {
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
  @swagger.ApiOkResponse({ type: TagOrganizationVendor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: TagOrganizationVendorWhereUniqueInput,
    @common.Body() data: TagOrganizationVendorUpdateInput
  ): Promise<TagOrganizationVendor | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          organizationVendor: {
            connect: data.organizationVendor,
          },

          tag: {
            connect: data.tag,
          },
        },
        select: {
          organizationVendor: {
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
  @swagger.ApiOkResponse({ type: TagOrganizationVendor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: TagOrganizationVendorWhereUniqueInput
  ): Promise<TagOrganizationVendor | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          organizationVendor: {
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