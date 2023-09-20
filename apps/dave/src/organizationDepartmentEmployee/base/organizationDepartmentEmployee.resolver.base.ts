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
import { CreateOrganizationDepartmentEmployeeArgs } from "./CreateOrganizationDepartmentEmployeeArgs";
import { UpdateOrganizationDepartmentEmployeeArgs } from "./UpdateOrganizationDepartmentEmployeeArgs";
import { DeleteOrganizationDepartmentEmployeeArgs } from "./DeleteOrganizationDepartmentEmployeeArgs";
import { OrganizationDepartmentEmployeeCountArgs } from "./OrganizationDepartmentEmployeeCountArgs";
import { OrganizationDepartmentEmployeeFindManyArgs } from "./OrganizationDepartmentEmployeeFindManyArgs";
import { OrganizationDepartmentEmployeeFindUniqueArgs } from "./OrganizationDepartmentEmployeeFindUniqueArgs";
import { OrganizationDepartmentEmployee } from "./OrganizationDepartmentEmployee";
import { Employee } from "../../employee/base/Employee";
import { OrganizationDepartment } from "../../organizationDepartment/base/OrganizationDepartment";
import { OrganizationDepartmentEmployeeService } from "../organizationDepartmentEmployee.service";
@graphql.Resolver(() => OrganizationDepartmentEmployee)
export class OrganizationDepartmentEmployeeResolverBase {
  constructor(
    protected readonly service: OrganizationDepartmentEmployeeService
  ) {}

  async _organizationDepartmentEmployeesMeta(
    @graphql.Args() args: OrganizationDepartmentEmployeeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [OrganizationDepartmentEmployee])
  async organizationDepartmentEmployees(
    @graphql.Args() args: OrganizationDepartmentEmployeeFindManyArgs
  ): Promise<OrganizationDepartmentEmployee[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => OrganizationDepartmentEmployee, { nullable: true })
  async organizationDepartmentEmployee(
    @graphql.Args() args: OrganizationDepartmentEmployeeFindUniqueArgs
  ): Promise<OrganizationDepartmentEmployee | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => OrganizationDepartmentEmployee)
  async createOrganizationDepartmentEmployee(
    @graphql.Args() args: CreateOrganizationDepartmentEmployeeArgs
  ): Promise<OrganizationDepartmentEmployee> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        employee: {
          connect: args.data.employee,
        },

        organizationDepartment: {
          connect: args.data.organizationDepartment,
        },
      },
    });
  }

  @graphql.Mutation(() => OrganizationDepartmentEmployee)
  async updateOrganizationDepartmentEmployee(
    @graphql.Args() args: UpdateOrganizationDepartmentEmployeeArgs
  ): Promise<OrganizationDepartmentEmployee | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          employee: {
            connect: args.data.employee,
          },

          organizationDepartment: {
            connect: args.data.organizationDepartment,
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

  @graphql.Mutation(() => OrganizationDepartmentEmployee)
  async deleteOrganizationDepartmentEmployee(
    @graphql.Args() args: DeleteOrganizationDepartmentEmployeeArgs
  ): Promise<OrganizationDepartmentEmployee | null> {
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
    @graphql.Parent() parent: OrganizationDepartmentEmployee
  ): Promise<Employee | null> {
    const result = await this.service.getEmployee(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => OrganizationDepartment, {
    nullable: true,
    name: "organizationDepartment",
  })
  async resolveFieldOrganizationDepartment(
    @graphql.Parent() parent: OrganizationDepartmentEmployee
  ): Promise<OrganizationDepartment | null> {
    const result = await this.service.getOrganizationDepartment(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}