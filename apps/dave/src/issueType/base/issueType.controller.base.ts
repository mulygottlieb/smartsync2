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
import { IssueTypeService } from "../issueType.service";
import { IssueTypeCreateInput } from "./IssueTypeCreateInput";
import { IssueTypeWhereInput } from "./IssueTypeWhereInput";
import { IssueTypeWhereUniqueInput } from "./IssueTypeWhereUniqueInput";
import { IssueTypeFindManyArgs } from "./IssueTypeFindManyArgs";
import { IssueTypeUpdateInput } from "./IssueTypeUpdateInput";
import { IssueType } from "./IssueType";

export class IssueTypeControllerBase {
  constructor(protected readonly service: IssueTypeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: IssueType })
  async create(@common.Body() data: IssueTypeCreateInput): Promise<IssueType> {
    return await this.service.create({
      data: {
        ...data,

        organizationProject: data.organizationProject
          ? {
              connect: data.organizationProject,
            }
          : undefined,

        organization: data.organization
          ? {
              connect: data.organization,
            }
          : undefined,

        imageAsset: data.imageAsset
          ? {
              connect: data.imageAsset,
            }
          : undefined,

        organizationTeam: data.organizationTeam
          ? {
              connect: data.organizationTeam,
            }
          : undefined,

        tenant: data.tenant
          ? {
              connect: data.tenant,
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

        organizationProject: {
          select: {
            id: true,
          },
        },

        organization: {
          select: {
            id: true,
          },
        },

        imageAsset: {
          select: {
            id: true,
          },
        },

        organizationTeam: {
          select: {
            id: true,
          },
        },

        tenant: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [IssueType] })
  @ApiNestedQuery(IssueTypeFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<IssueType[]> {
    const args = plainToClass(IssueTypeFindManyArgs, request.query);
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

        organizationProject: {
          select: {
            id: true,
          },
        },

        organization: {
          select: {
            id: true,
          },
        },

        imageAsset: {
          select: {
            id: true,
          },
        },

        organizationTeam: {
          select: {
            id: true,
          },
        },

        tenant: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: IssueType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: IssueTypeWhereUniqueInput
  ): Promise<IssueType | null> {
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

        organizationProject: {
          select: {
            id: true,
          },
        },

        organization: {
          select: {
            id: true,
          },
        },

        imageAsset: {
          select: {
            id: true,
          },
        },

        organizationTeam: {
          select: {
            id: true,
          },
        },

        tenant: {
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
  @swagger.ApiOkResponse({ type: IssueType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: IssueTypeWhereUniqueInput,
    @common.Body() data: IssueTypeUpdateInput
  ): Promise<IssueType | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          organizationProject: data.organizationProject
            ? {
                connect: data.organizationProject,
              }
            : undefined,

          organization: data.organization
            ? {
                connect: data.organization,
              }
            : undefined,

          imageAsset: data.imageAsset
            ? {
                connect: data.imageAsset,
              }
            : undefined,

          organizationTeam: data.organizationTeam
            ? {
                connect: data.organizationTeam,
              }
            : undefined,

          tenant: data.tenant
            ? {
                connect: data.tenant,
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

          organizationProject: {
            select: {
              id: true,
            },
          },

          organization: {
            select: {
              id: true,
            },
          },

          imageAsset: {
            select: {
              id: true,
            },
          },

          organizationTeam: {
            select: {
              id: true,
            },
          },

          tenant: {
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
  @swagger.ApiOkResponse({ type: IssueType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: IssueTypeWhereUniqueInput
  ): Promise<IssueType | null> {
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

          organizationProject: {
            select: {
              id: true,
            },
          },

          organization: {
            select: {
              id: true,
            },
          },

          imageAsset: {
            select: {
              id: true,
            },
          },

          organizationTeam: {
            select: {
              id: true,
            },
          },

          tenant: {
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
