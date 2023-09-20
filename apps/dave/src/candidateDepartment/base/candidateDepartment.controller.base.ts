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
import { CandidateDepartmentService } from "../candidateDepartment.service";
import { CandidateDepartmentCreateInput } from "./CandidateDepartmentCreateInput";
import { CandidateDepartmentWhereInput } from "./CandidateDepartmentWhereInput";
import { CandidateDepartmentWhereUniqueInput } from "./CandidateDepartmentWhereUniqueInput";
import { CandidateDepartmentFindManyArgs } from "./CandidateDepartmentFindManyArgs";
import { CandidateDepartmentUpdateInput } from "./CandidateDepartmentUpdateInput";
import { CandidateDepartment } from "./CandidateDepartment";

export class CandidateDepartmentControllerBase {
  constructor(protected readonly service: CandidateDepartmentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CandidateDepartment })
  async create(
    @common.Body() data: CandidateDepartmentCreateInput
  ): Promise<CandidateDepartment> {
    return await this.service.create({
      data: {
        ...data,

        organizationDepartment: {
          connect: data.organizationDepartment,
        },

        candidate: {
          connect: data.candidate,
        },
      },
      select: {
        organizationDepartment: {
          select: {
            id: true,
          },
        },

        candidate: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CandidateDepartment] })
  @ApiNestedQuery(CandidateDepartmentFindManyArgs)
  async findMany(
    @common.Req() request: Request
  ): Promise<CandidateDepartment[]> {
    const args = plainToClass(CandidateDepartmentFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        organizationDepartment: {
          select: {
            id: true,
          },
        },

        candidate: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CandidateDepartment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: CandidateDepartmentWhereUniqueInput
  ): Promise<CandidateDepartment | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        organizationDepartment: {
          select: {
            id: true,
          },
        },

        candidate: {
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
  @swagger.ApiOkResponse({ type: CandidateDepartment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: CandidateDepartmentWhereUniqueInput,
    @common.Body() data: CandidateDepartmentUpdateInput
  ): Promise<CandidateDepartment | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          organizationDepartment: {
            connect: data.organizationDepartment,
          },

          candidate: {
            connect: data.candidate,
          },
        },
        select: {
          organizationDepartment: {
            select: {
              id: true,
            },
          },

          candidate: {
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
  @swagger.ApiOkResponse({ type: CandidateDepartment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: CandidateDepartmentWhereUniqueInput
  ): Promise<CandidateDepartment | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          organizationDepartment: {
            select: {
              id: true,
            },
          },

          candidate: {
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