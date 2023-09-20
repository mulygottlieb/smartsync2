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
import { IntegrationSettingService } from "../integrationSetting.service";
import { IntegrationSettingCreateInput } from "./IntegrationSettingCreateInput";
import { IntegrationSettingWhereInput } from "./IntegrationSettingWhereInput";
import { IntegrationSettingWhereUniqueInput } from "./IntegrationSettingWhereUniqueInput";
import { IntegrationSettingFindManyArgs } from "./IntegrationSettingFindManyArgs";
import { IntegrationSettingUpdateInput } from "./IntegrationSettingUpdateInput";
import { IntegrationSetting } from "./IntegrationSetting";

export class IntegrationSettingControllerBase {
  constructor(protected readonly service: IntegrationSettingService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: IntegrationSetting })
  async create(
    @common.Body() data: IntegrationSettingCreateInput
  ): Promise<IntegrationSetting> {
    return await this.service.create({
      data: {
        ...data,

        integrationTenant: {
          connect: data.integrationTenant,
        },

        organization: data.organization
          ? {
              connect: data.organization,
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
        settingsName: true,
        settingsValue: true,

        integrationTenant: {
          select: {
            id: true,
          },
        },

        organization: {
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
  @swagger.ApiOkResponse({ type: [IntegrationSetting] })
  @ApiNestedQuery(IntegrationSettingFindManyArgs)
  async findMany(
    @common.Req() request: Request
  ): Promise<IntegrationSetting[]> {
    const args = plainToClass(IntegrationSettingFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        settingsName: true,
        settingsValue: true,

        integrationTenant: {
          select: {
            id: true,
          },
        },

        organization: {
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
  @swagger.ApiOkResponse({ type: IntegrationSetting })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: IntegrationSettingWhereUniqueInput
  ): Promise<IntegrationSetting | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        settingsName: true,
        settingsValue: true,

        integrationTenant: {
          select: {
            id: true,
          },
        },

        organization: {
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
  @swagger.ApiOkResponse({ type: IntegrationSetting })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: IntegrationSettingWhereUniqueInput,
    @common.Body() data: IntegrationSettingUpdateInput
  ): Promise<IntegrationSetting | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          integrationTenant: {
            connect: data.integrationTenant,
          },

          organization: data.organization
            ? {
                connect: data.organization,
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
          settingsName: true,
          settingsValue: true,

          integrationTenant: {
            select: {
              id: true,
            },
          },

          organization: {
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
  @swagger.ApiOkResponse({ type: IntegrationSetting })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: IntegrationSettingWhereUniqueInput
  ): Promise<IntegrationSetting | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          settingsName: true,
          settingsValue: true,

          integrationTenant: {
            select: {
              id: true,
            },
          },

          organization: {
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
