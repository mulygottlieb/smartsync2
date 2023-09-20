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
import { InviteOrganizationDepartmentService } from "../inviteOrganizationDepartment.service";
import { InviteOrganizationDepartmentCreateInput } from "./InviteOrganizationDepartmentCreateInput";
import { InviteOrganizationDepartmentWhereInput } from "./InviteOrganizationDepartmentWhereInput";
import { InviteOrganizationDepartmentWhereUniqueInput } from "./InviteOrganizationDepartmentWhereUniqueInput";
import { InviteOrganizationDepartmentFindManyArgs } from "./InviteOrganizationDepartmentFindManyArgs";
import { InviteOrganizationDepartmentUpdateInput } from "./InviteOrganizationDepartmentUpdateInput";
import { InviteOrganizationDepartment } from "./InviteOrganizationDepartment";

export class InviteOrganizationDepartmentControllerBase {
  constructor(
    protected readonly service: InviteOrganizationDepartmentService
  ) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: InviteOrganizationDepartment })
  async create(
    @common.Body() data: InviteOrganizationDepartmentCreateInput
  ): Promise<InviteOrganizationDepartment> {
    return await this.service.create({
      data: {
        ...data,

        invite: {
          connect: data.invite,
        },

        organizationDepartment: {
          connect: data.organizationDepartment,
        },
      },
      select: {
        invite: {
          select: {
            id: true,
          },
        },

        organizationDepartment: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [InviteOrganizationDepartment] })
  @ApiNestedQuery(InviteOrganizationDepartmentFindManyArgs)
  async findMany(
    @common.Req() request: Request
  ): Promise<InviteOrganizationDepartment[]> {
    const args = plainToClass(
      InviteOrganizationDepartmentFindManyArgs,
      request.query
    );
    return this.service.findMany({
      ...args,
      select: {
        invite: {
          select: {
            id: true,
          },
        },

        organizationDepartment: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: InviteOrganizationDepartment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: InviteOrganizationDepartmentWhereUniqueInput
  ): Promise<InviteOrganizationDepartment | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        invite: {
          select: {
            id: true,
          },
        },

        organizationDepartment: {
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
  @swagger.ApiOkResponse({ type: InviteOrganizationDepartment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: InviteOrganizationDepartmentWhereUniqueInput,
    @common.Body() data: InviteOrganizationDepartmentUpdateInput
  ): Promise<InviteOrganizationDepartment | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          invite: {
            connect: data.invite,
          },

          organizationDepartment: {
            connect: data.organizationDepartment,
          },
        },
        select: {
          invite: {
            select: {
              id: true,
            },
          },

          organizationDepartment: {
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
  @swagger.ApiOkResponse({ type: InviteOrganizationDepartment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: InviteOrganizationDepartmentWhereUniqueInput
  ): Promise<InviteOrganizationDepartment | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          invite: {
            select: {
              id: true,
            },
          },

          organizationDepartment: {
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
