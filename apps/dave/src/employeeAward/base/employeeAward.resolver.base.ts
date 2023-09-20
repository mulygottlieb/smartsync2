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
import { CreateEmployeeAwardArgs } from "./CreateEmployeeAwardArgs";
import { UpdateEmployeeAwardArgs } from "./UpdateEmployeeAwardArgs";
import { DeleteEmployeeAwardArgs } from "./DeleteEmployeeAwardArgs";
import { EmployeeAwardCountArgs } from "./EmployeeAwardCountArgs";
import { EmployeeAwardFindManyArgs } from "./EmployeeAwardFindManyArgs";
import { EmployeeAwardFindUniqueArgs } from "./EmployeeAwardFindUniqueArgs";
import { EmployeeAward } from "./EmployeeAward";
import { Employee } from "../../employee/base/Employee";
import { Tenant } from "../../tenant/base/Tenant";
import { Organization } from "../../organization/base/Organization";
import { EmployeeAwardService } from "../employeeAward.service";
@graphql.Resolver(() => EmployeeAward)
export class EmployeeAwardResolverBase {
  constructor(protected readonly service: EmployeeAwardService) {}

  async _employeeAwardsMeta(
    @graphql.Args() args: EmployeeAwardCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [EmployeeAward])
  async employeeAwards(
    @graphql.Args() args: EmployeeAwardFindManyArgs
  ): Promise<EmployeeAward[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => EmployeeAward, { nullable: true })
  async employeeAward(
    @graphql.Args() args: EmployeeAwardFindUniqueArgs
  ): Promise<EmployeeAward | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => EmployeeAward)
  async createEmployeeAward(
    @graphql.Args() args: CreateEmployeeAwardArgs
  ): Promise<EmployeeAward> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        employee: {
          connect: args.data.employee,
        },

        tenant: args.data.tenant
          ? {
              connect: args.data.tenant,
            }
          : undefined,

        organization: args.data.organization
          ? {
              connect: args.data.organization,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => EmployeeAward)
  async updateEmployeeAward(
    @graphql.Args() args: UpdateEmployeeAwardArgs
  ): Promise<EmployeeAward | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          employee: {
            connect: args.data.employee,
          },

          tenant: args.data.tenant
            ? {
                connect: args.data.tenant,
              }
            : undefined,

          organization: args.data.organization
            ? {
                connect: args.data.organization,
              }
            : undefined,
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

  @graphql.Mutation(() => EmployeeAward)
  async deleteEmployeeAward(
    @graphql.Args() args: DeleteEmployeeAwardArgs
  ): Promise<EmployeeAward | null> {
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

  @graphql.ResolveField(() => Employee, {
    nullable: true,
    name: "employee",
  })
  async resolveFieldEmployee(
    @graphql.Parent() parent: EmployeeAward
  ): Promise<Employee | null> {
    const result = await this.service.getEmployee(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Tenant, {
    nullable: true,
    name: "tenant",
  })
  async resolveFieldTenant(
    @graphql.Parent() parent: EmployeeAward
  ): Promise<Tenant | null> {
    const result = await this.service.getTenant(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Organization, {
    nullable: true,
    name: "organization",
  })
  async resolveFieldOrganization(
    @graphql.Parent() parent: EmployeeAward
  ): Promise<Organization | null> {
    const result = await this.service.getOrganization(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}