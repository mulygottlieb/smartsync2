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
import { CandidateCriterionRatingService } from "../candidateCriterionRating.service";
import { CandidateCriterionRatingCreateInput } from "./CandidateCriterionRatingCreateInput";
import { CandidateCriterionRatingWhereInput } from "./CandidateCriterionRatingWhereInput";
import { CandidateCriterionRatingWhereUniqueInput } from "./CandidateCriterionRatingWhereUniqueInput";
import { CandidateCriterionRatingFindManyArgs } from "./CandidateCriterionRatingFindManyArgs";
import { CandidateCriterionRatingUpdateInput } from "./CandidateCriterionRatingUpdateInput";
import { CandidateCriterionRating } from "./CandidateCriterionRating";

export class CandidateCriterionRatingControllerBase {
  constructor(protected readonly service: CandidateCriterionRatingService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CandidateCriterionRating })
  async create(
    @common.Body() data: CandidateCriterionRatingCreateInput
  ): Promise<CandidateCriterionRating> {
    return await this.service.create({
      data: {
        ...data,

        candidateFeedback: data.candidateFeedback
          ? {
              connect: data.candidateFeedback,
            }
          : undefined,

        tenant: data.tenant
          ? {
              connect: data.tenant,
            }
          : undefined,

        organization: data.organization
          ? {
              connect: data.organization,
            }
          : undefined,

        candidatePersonalQuality: data.candidatePersonalQuality
          ? {
              connect: data.candidatePersonalQuality,
            }
          : undefined,

        candidateTechnology: data.candidateTechnology
          ? {
              connect: data.candidateTechnology,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        rating: true,

        candidateFeedback: {
          select: {
            id: true,
          },
        },

        tenant: {
          select: {
            id: true,
          },
        },

        organization: {
          select: {
            id: true,
          },
        },

        candidatePersonalQuality: {
          select: {
            id: true,
          },
        },

        candidateTechnology: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CandidateCriterionRating] })
  @ApiNestedQuery(CandidateCriterionRatingFindManyArgs)
  async findMany(
    @common.Req() request: Request
  ): Promise<CandidateCriterionRating[]> {
    const args = plainToClass(
      CandidateCriterionRatingFindManyArgs,
      request.query
    );
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        rating: true,

        candidateFeedback: {
          select: {
            id: true,
          },
        },

        tenant: {
          select: {
            id: true,
          },
        },

        organization: {
          select: {
            id: true,
          },
        },

        candidatePersonalQuality: {
          select: {
            id: true,
          },
        },

        candidateTechnology: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CandidateCriterionRating })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: CandidateCriterionRatingWhereUniqueInput
  ): Promise<CandidateCriterionRating | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        rating: true,

        candidateFeedback: {
          select: {
            id: true,
          },
        },

        tenant: {
          select: {
            id: true,
          },
        },

        organization: {
          select: {
            id: true,
          },
        },

        candidatePersonalQuality: {
          select: {
            id: true,
          },
        },

        candidateTechnology: {
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
  @swagger.ApiOkResponse({ type: CandidateCriterionRating })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: CandidateCriterionRatingWhereUniqueInput,
    @common.Body() data: CandidateCriterionRatingUpdateInput
  ): Promise<CandidateCriterionRating | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          candidateFeedback: data.candidateFeedback
            ? {
                connect: data.candidateFeedback,
              }
            : undefined,

          tenant: data.tenant
            ? {
                connect: data.tenant,
              }
            : undefined,

          organization: data.organization
            ? {
                connect: data.organization,
              }
            : undefined,

          candidatePersonalQuality: data.candidatePersonalQuality
            ? {
                connect: data.candidatePersonalQuality,
              }
            : undefined,

          candidateTechnology: data.candidateTechnology
            ? {
                connect: data.candidateTechnology,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          rating: true,

          candidateFeedback: {
            select: {
              id: true,
            },
          },

          tenant: {
            select: {
              id: true,
            },
          },

          organization: {
            select: {
              id: true,
            },
          },

          candidatePersonalQuality: {
            select: {
              id: true,
            },
          },

          candidateTechnology: {
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
  @swagger.ApiOkResponse({ type: CandidateCriterionRating })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: CandidateCriterionRatingWhereUniqueInput
  ): Promise<CandidateCriterionRating | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          rating: true,

          candidateFeedback: {
            select: {
              id: true,
            },
          },

          tenant: {
            select: {
              id: true,
            },
          },

          organization: {
            select: {
              id: true,
            },
          },

          candidatePersonalQuality: {
            select: {
              id: true,
            },
          },

          candidateTechnology: {
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