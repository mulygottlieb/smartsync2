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
import { TaskVersionService } from "../taskVersion.service";
import { TaskVersionCreateInput } from "./TaskVersionCreateInput";
import { TaskVersionWhereInput } from "./TaskVersionWhereInput";
import { TaskVersionWhereUniqueInput } from "./TaskVersionWhereUniqueInput";
import { TaskVersionFindManyArgs } from "./TaskVersionFindManyArgs";
import { TaskVersionUpdateInput } from "./TaskVersionUpdateInput";
import { TaskVersion } from "./TaskVersion";

export class TaskVersionControllerBase {
  constructor(protected readonly service: TaskVersionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TaskVersion })
  async create(
    @common.Body() data: TaskVersionCreateInput
  ): Promise<TaskVersion> {
    return await this.service.create({
      data: {
        ...data,

        tenant: data.tenant
          ? {
              connect: data.tenant,
            }
          : undefined,

        organizationProject: data.organizationProject
          ? {
              connect: data.organizationProject,
            }
          : undefined,

        organizationTeam: data.organizationTeam
          ? {
              connect: data.organizationTeam,
            }
          : undefined,

        organization: data.organization
          ? {
              connect: data.organization,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        value: true,
        description: true,
        icon: true,
        color: true,
        isSystem: true,

        tenant: {
          select: {
            id: true,
          },
        },

        organizationProject: {
          select: {
            id: true,
          },
        },

        organizationTeam: {
          select: {
            id: true,
          },
        },

        organization: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [TaskVersion] })
  @ApiNestedQuery(TaskVersionFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<TaskVersion[]> {
    const args = plainToClass(TaskVersionFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        value: true,
        description: true,
        icon: true,
        color: true,
        isSystem: true,

        tenant: {
          select: {
            id: true,
          },
        },

        organizationProject: {
          select: {
            id: true,
          },
        },

        organizationTeam: {
          select: {
            id: true,
          },
        },

        organization: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: TaskVersion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: TaskVersionWhereUniqueInput
  ): Promise<TaskVersion | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        value: true,
        description: true,
        icon: true,
        color: true,
        isSystem: true,

        tenant: {
          select: {
            id: true,
          },
        },

        organizationProject: {
          select: {
            id: true,
          },
        },

        organizationTeam: {
          select: {
            id: true,
          },
        },

        organization: {
          select: {
            id: true,
          },
        },
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
  @swagger.ApiOkResponse({ type: TaskVersion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: TaskVersionWhereUniqueInput,
    @common.Body() data: TaskVersionUpdateInput
  ): Promise<TaskVersion | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          tenant: data.tenant
            ? {
                connect: data.tenant,
              }
            : undefined,

          organizationProject: data.organizationProject
            ? {
                connect: data.organizationProject,
              }
            : undefined,

          organizationTeam: data.organizationTeam
            ? {
                connect: data.organizationTeam,
              }
            : undefined,

          organization: data.organization
            ? {
                connect: data.organization,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          value: true,
          description: true,
          icon: true,
          color: true,
          isSystem: true,

          tenant: {
            select: {
              id: true,
            },
          },

          organizationProject: {
            select: {
              id: true,
            },
          },

          organizationTeam: {
            select: {
              id: true,
            },
          },

          organization: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: TaskVersion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: TaskVersionWhereUniqueInput
  ): Promise<TaskVersion | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          value: true,
          description: true,
          icon: true,
          color: true,
          isSystem: true,

          tenant: {
            select: {
              id: true,
            },
          },

          organizationProject: {
            select: {
              id: true,
            },
          },

          organizationTeam: {
            select: {
              id: true,
            },
          },

          organization: {
            select: {
              id: true,
            },
          },
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