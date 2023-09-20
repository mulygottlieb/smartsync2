/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateTagEmployeeArgs } from "./CreateTagEmployeeArgs";
import { UpdateTagEmployeeArgs } from "./UpdateTagEmployeeArgs";
import { DeleteTagEmployeeArgs } from "./DeleteTagEmployeeArgs";
import { TagEmployeeCountArgs } from "./TagEmployeeCountArgs";
import { TagEmployeeFindManyArgs } from "./TagEmployeeFindManyArgs";
import { TagEmployeeFindUniqueArgs } from "./TagEmployeeFindUniqueArgs";
import { TagEmployee } from "./TagEmployee";
import { Tag } from "../../tag/base/Tag";
import { Employee } from "../../employee/base/Employee";
import { TagEmployeeService } from "../tagEmployee.service";
@graphql.Resolver(() => TagEmployee)
export class TagEmployeeResolverBase {
  constructor(protected readonly service: TagEmployeeService) {}

  async _tagEmployeesMeta(
    @graphql.Args() args: TagEmployeeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [TagEmployee])
  async tagEmployees(
    @graphql.Args() args: TagEmployeeFindManyArgs
  ): Promise<TagEmployee[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => TagEmployee, { nullable: true })
  async tagEmployee(
    @graphql.Args() args: TagEmployeeFindUniqueArgs
  ): Promise<TagEmployee | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => TagEmployee)
  async createTagEmployee(
    @graphql.Args() args: CreateTagEmployeeArgs
  ): Promise<TagEmployee> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        tag: {
          connect: args.data.tag,
        },

        employee: {
          connect: args.data.employee,
        },
      },
    });
  }

  @graphql.Mutation(() => TagEmployee)
  async updateTagEmployee(
    @graphql.Args() args: UpdateTagEmployeeArgs
  ): Promise<TagEmployee | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          tag: {
            connect: args.data.tag,
          },

          employee: {
            connect: args.data.employee,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => TagEmployee)
  async deleteTagEmployee(
    @graphql.Args() args: DeleteTagEmployeeArgs
  ): Promise<TagEmployee | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Tag, {
    nullable: true,
    name: "tag",
  })
  async resolveFieldTag(
    @graphql.Parent() parent: TagEmployee
  ): Promise<Tag | null> {
    const result = await this.service.getTag(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Employee, {
    nullable: true,
    name: "employee",
  })
  async resolveFieldEmployee(
    @graphql.Parent() parent: TagEmployee
  ): Promise<Employee | null> {
    const result = await this.service.getEmployee(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}