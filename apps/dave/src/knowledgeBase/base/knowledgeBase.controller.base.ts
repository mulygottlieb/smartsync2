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
import { KnowledgeBaseService } from "../knowledgeBase.service";
import { KnowledgeBaseCreateInput } from "./KnowledgeBaseCreateInput";
import { KnowledgeBaseWhereInput } from "./KnowledgeBaseWhereInput";
import { KnowledgeBaseWhereUniqueInput } from "./KnowledgeBaseWhereUniqueInput";
import { KnowledgeBaseFindManyArgs } from "./KnowledgeBaseFindManyArgs";
import { KnowledgeBaseUpdateInput } from "./KnowledgeBaseUpdateInput";
import { KnowledgeBase } from "./KnowledgeBase";
import { KnowledgeBaseArticleFindManyArgs } from "../../knowledgeBaseArticle/base/KnowledgeBaseArticleFindManyArgs";
import { KnowledgeBaseArticle } from "../../knowledgeBaseArticle/base/KnowledgeBaseArticle";
import { KnowledgeBaseArticleWhereUniqueInput } from "../../knowledgeBaseArticle/base/KnowledgeBaseArticleWhereUniqueInput";

export class KnowledgeBaseControllerBase {
  constructor(protected readonly service: KnowledgeBaseService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: KnowledgeBase })
  async create(
    @common.Body() data: KnowledgeBaseCreateInput
  ): Promise<KnowledgeBase> {
    return await this.service.create({
      data: {
        ...data,

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

        knowledgeBase: data.knowledgeBase
          ? {
              connect: data.knowledgeBase,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        flag: true,
        icon: true,
        privacy: true,
        language: true,
        color: true,
        description: true,
        data: true,
        index: true,

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

        knowledgeBase: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [KnowledgeBase] })
  @ApiNestedQuery(KnowledgeBaseFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<KnowledgeBase[]> {
    const args = plainToClass(KnowledgeBaseFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        flag: true,
        icon: true,
        privacy: true,
        language: true,
        color: true,
        description: true,
        data: true,
        index: true,

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

        knowledgeBase: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: KnowledgeBase })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: KnowledgeBaseWhereUniqueInput
  ): Promise<KnowledgeBase | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        flag: true,
        icon: true,
        privacy: true,
        language: true,
        color: true,
        description: true,
        data: true,
        index: true,

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

        knowledgeBase: {
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
  @swagger.ApiOkResponse({ type: KnowledgeBase })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: KnowledgeBaseWhereUniqueInput,
    @common.Body() data: KnowledgeBaseUpdateInput
  ): Promise<KnowledgeBase | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

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

          knowledgeBase: data.knowledgeBase
            ? {
                connect: data.knowledgeBase,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          flag: true,
          icon: true,
          privacy: true,
          language: true,
          color: true,
          description: true,
          data: true,
          index: true,

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

          knowledgeBase: {
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
  @swagger.ApiOkResponse({ type: KnowledgeBase })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: KnowledgeBaseWhereUniqueInput
  ): Promise<KnowledgeBase | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          flag: true,
          icon: true,
          privacy: true,
          language: true,
          color: true,
          description: true,
          data: true,
          index: true,

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

          knowledgeBase: {
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

  @common.Get("/:id/otherKnowledgeBase")
  @ApiNestedQuery(KnowledgeBaseFindManyArgs)
  async findManyOtherKnowledgeBase(
    @common.Req() request: Request,
    @common.Param() params: KnowledgeBaseWhereUniqueInput
  ): Promise<KnowledgeBase[]> {
    const query = plainToClass(KnowledgeBaseFindManyArgs, request.query);
    const results = await this.service.findOtherKnowledgeBase(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        flag: true,
        icon: true,
        privacy: true,
        language: true,
        color: true,
        description: true,
        data: true,
        index: true,

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

        knowledgeBase: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/otherKnowledgeBase")
  async connectOtherKnowledgeBase(
    @common.Param() params: KnowledgeBaseWhereUniqueInput,
    @common.Body() body: KnowledgeBaseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      otherKnowledgeBase: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/otherKnowledgeBase")
  async updateOtherKnowledgeBase(
    @common.Param() params: KnowledgeBaseWhereUniqueInput,
    @common.Body() body: KnowledgeBaseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      otherKnowledgeBase: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/otherKnowledgeBase")
  async disconnectOtherKnowledgeBase(
    @common.Param() params: KnowledgeBaseWhereUniqueInput,
    @common.Body() body: KnowledgeBaseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      otherKnowledgeBase: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/knowledgeBaseArticle")
  @ApiNestedQuery(KnowledgeBaseArticleFindManyArgs)
  async findManyKnowledgeBaseArticle(
    @common.Req() request: Request,
    @common.Param() params: KnowledgeBaseWhereUniqueInput
  ): Promise<KnowledgeBaseArticle[]> {
    const query = plainToClass(KnowledgeBaseArticleFindManyArgs, request.query);
    const results = await this.service.findKnowledgeBaseArticle(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,
        data: true,
        draft: true,
        privacy: true,
        index: true,

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

        knowledgeBase: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/knowledgeBaseArticle")
  async connectKnowledgeBaseArticle(
    @common.Param() params: KnowledgeBaseWhereUniqueInput,
    @common.Body() body: KnowledgeBaseArticleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      knowledgeBaseArticle: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/knowledgeBaseArticle")
  async updateKnowledgeBaseArticle(
    @common.Param() params: KnowledgeBaseWhereUniqueInput,
    @common.Body() body: KnowledgeBaseArticleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      knowledgeBaseArticle: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/knowledgeBaseArticle")
  async disconnectKnowledgeBaseArticle(
    @common.Param() params: KnowledgeBaseWhereUniqueInput,
    @common.Body() body: KnowledgeBaseArticleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      knowledgeBaseArticle: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
