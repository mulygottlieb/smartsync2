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
import { TagOrganizationTeamService } from "../tagOrganizationTeam.service";
import { TagOrganizationTeamCreateInput } from "./TagOrganizationTeamCreateInput";
import { TagOrganizationTeamWhereInput } from "./TagOrganizationTeamWhereInput";
import { TagOrganizationTeamWhereUniqueInput } from "./TagOrganizationTeamWhereUniqueInput";
import { TagOrganizationTeamFindManyArgs } from "./TagOrganizationTeamFindManyArgs";
import { TagOrganizationTeamUpdateInput } from "./TagOrganizationTeamUpdateInput";
import { TagOrganizationTeam } from "./TagOrganizationTeam";

export class TagOrganizationTeamControllerBase {
  constructor(protected readonly service: TagOrganizationTeamService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TagOrganizationTeam })
  async create(
    @common.Body() data: TagOrganizationTeamCreateInput
  ): Promise<TagOrganizationTeam> {
    return await this.service.create({
      data: {
        ...data,

        tag: {
          connect: data.tag,
        },

        organizationTeam: {
          connect: data.organizationTeam,
        },
      },
      select: {
        tag: {
          select: {
            id: true,
          },
        },

        organizationTeam: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [TagOrganizationTeam] })
  @ApiNestedQuery(TagOrganizationTeamFindManyArgs)
  async findMany(
    @common.Req() request: Request
  ): Promise<TagOrganizationTeam[]> {
    const args = plainToClass(TagOrganizationTeamFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        tag: {
          select: {
            id: true,
          },
        },

        organizationTeam: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: TagOrganizationTeam })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: TagOrganizationTeamWhereUniqueInput
  ): Promise<TagOrganizationTeam | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        tag: {
          select: {
            id: true,
          },
        },

        organizationTeam: {
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
  @swagger.ApiOkResponse({ type: TagOrganizationTeam })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: TagOrganizationTeamWhereUniqueInput,
    @common.Body() data: TagOrganizationTeamUpdateInput
  ): Promise<TagOrganizationTeam | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          tag: {
            connect: data.tag,
          },

          organizationTeam: {
            connect: data.organizationTeam,
          },
        },
        select: {
          tag: {
            select: {
              id: true,
            },
          },

          organizationTeam: {
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
  @swagger.ApiOkResponse({ type: TagOrganizationTeam })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: TagOrganizationTeamWhereUniqueInput
  ): Promise<TagOrganizationTeam | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          tag: {
            select: {
              id: true,
            },
          },

          organizationTeam: {
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