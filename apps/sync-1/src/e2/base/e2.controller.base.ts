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
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { E2Service } from "../e2.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { E2CreateInput } from "./E2CreateInput";
import { E2WhereInput } from "./E2WhereInput";
import { E2WhereUniqueInput } from "./E2WhereUniqueInput";
import { E2FindManyArgs } from "./E2FindManyArgs";
import { E2UpdateInput } from "./E2UpdateInput";
import { E2 } from "./E2";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class E2ControllerBase {
  constructor(
    protected readonly service: E2Service,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: E2 })
  @nestAccessControl.UseRoles({
    resource: "E2",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: E2CreateInput): Promise<E2> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        fld1: true,
        fld11: true,
        fld2: true,
        fld22: true,
        fld23: true,
        fld3: true,
        fld33: true,
        fld34: true,
        fld4: true,
        fld44: true,
        fld45: true,
        fld46: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [E2] })
  @ApiNestedQuery(E2FindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "E2",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<E2[]> {
    const args = plainToClass(E2FindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        fld1: true,
        fld11: true,
        fld2: true,
        fld22: true,
        fld23: true,
        fld3: true,
        fld33: true,
        fld34: true,
        fld4: true,
        fld44: true,
        fld45: true,
        fld46: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: E2 })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "E2",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: E2WhereUniqueInput
  ): Promise<E2 | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        fld1: true,
        fld11: true,
        fld2: true,
        fld22: true,
        fld23: true,
        fld3: true,
        fld33: true,
        fld34: true,
        fld4: true,
        fld44: true,
        fld45: true,
        fld46: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: E2 })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "E2",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: E2WhereUniqueInput,
    @common.Body() data: E2UpdateInput
  ): Promise<E2 | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          fld1: true,
          fld11: true,
          fld2: true,
          fld22: true,
          fld23: true,
          fld3: true,
          fld33: true,
          fld34: true,
          fld4: true,
          fld44: true,
          fld45: true,
          fld46: true,
          id: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: E2 })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "E2",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(@common.Param() params: E2WhereUniqueInput): Promise<E2 | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          fld1: true,
          fld11: true,
          fld2: true,
          fld22: true,
          fld23: true,
          fld3: true,
          fld33: true,
          fld34: true,
          fld4: true,
          fld44: true,
          fld45: true,
          fld46: true,
          id: true,
          updatedAt: true,
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
