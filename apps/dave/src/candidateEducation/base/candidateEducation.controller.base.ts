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
import { CandidateEducationService } from "../candidateEducation.service";
import { CandidateEducationCreateInput } from "./CandidateEducationCreateInput";
import { CandidateEducationWhereInput } from "./CandidateEducationWhereInput";
import { CandidateEducationWhereUniqueInput } from "./CandidateEducationWhereUniqueInput";
import { CandidateEducationFindManyArgs } from "./CandidateEducationFindManyArgs";
import { CandidateEducationUpdateInput } from "./CandidateEducationUpdateInput";
import { CandidateEducation } from "./CandidateEducation";

export class CandidateEducationControllerBase {
  constructor(protected readonly service: CandidateEducationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CandidateEducation })
  async create(
    @common.Body() data: CandidateEducationCreateInput
  ): Promise<CandidateEducation> {
    return await this.service.create({
      data: {
        ...data,

        tenant: data.tenant
          ? {
              connect: data.tenant,
            }
          : undefined,

        candidate: data.candidate
          ? {
              connect: data.candidate,
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
        schoolName: true,
        degree: true,
        field: true,
        completionDate: true,
        notes: true,

        tenant: {
          select: {
            id: true,
          },
        },

        candidate: {
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
  @swagger.ApiOkResponse({ type: [CandidateEducation] })
  @ApiNestedQuery(CandidateEducationFindManyArgs)
  async findMany(
    @common.Req() request: Request
  ): Promise<CandidateEducation[]> {
    const args = plainToClass(CandidateEducationFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        schoolName: true,
        degree: true,
        field: true,
        completionDate: true,
        notes: true,

        tenant: {
          select: {
            id: true,
          },
        },

        candidate: {
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
  @swagger.ApiOkResponse({ type: CandidateEducation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: CandidateEducationWhereUniqueInput
  ): Promise<CandidateEducation | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        schoolName: true,
        degree: true,
        field: true,
        completionDate: true,
        notes: true,

        tenant: {
          select: {
            id: true,
          },
        },

        candidate: {
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
  @swagger.ApiOkResponse({ type: CandidateEducation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: CandidateEducationWhereUniqueInput,
    @common.Body() data: CandidateEducationUpdateInput
  ): Promise<CandidateEducation | null> {
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

          candidate: data.candidate
            ? {
                connect: data.candidate,
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
          schoolName: true,
          degree: true,
          field: true,
          completionDate: true,
          notes: true,

          tenant: {
            select: {
              id: true,
            },
          },

          candidate: {
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
  @swagger.ApiOkResponse({ type: CandidateEducation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: CandidateEducationWhereUniqueInput
  ): Promise<CandidateEducation | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          schoolName: true,
          degree: true,
          field: true,
          completionDate: true,
          notes: true,

          tenant: {
            select: {
              id: true,
            },
          },

          candidate: {
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