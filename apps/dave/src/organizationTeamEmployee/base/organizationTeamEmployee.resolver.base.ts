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
import { CreateOrganizationTeamEmployeeArgs } from "./CreateOrganizationTeamEmployeeArgs";
import { UpdateOrganizationTeamEmployeeArgs } from "./UpdateOrganizationTeamEmployeeArgs";
import { DeleteOrganizationTeamEmployeeArgs } from "./DeleteOrganizationTeamEmployeeArgs";
import { OrganizationTeamEmployeeCountArgs } from "./OrganizationTeamEmployeeCountArgs";
import { OrganizationTeamEmployeeFindManyArgs } from "./OrganizationTeamEmployeeFindManyArgs";
import { OrganizationTeamEmployeeFindUniqueArgs } from "./OrganizationTeamEmployeeFindUniqueArgs";
import { OrganizationTeamEmployee } from "./OrganizationTeamEmployee";
import { OrganizationTeam } from "../../organizationTeam/base/OrganizationTeam";
import { Employee } from "../../employee/base/Employee";
import { Role } from "../../role/base/Role";
import { Organization } from "../../organization/base/Organization";
import { Tenant } from "../../tenant/base/Tenant";
import { OrganizationTeamEmployeeService } from "../organizationTeamEmployee.service";
@graphql.Resolver(() => OrganizationTeamEmployee)
export class OrganizationTeamEmployeeResolverBase {
  constructor(protected readonly service: OrganizationTeamEmployeeService) {}

  async _organizationTeamEmployeesMeta(
    @graphql.Args() args: OrganizationTeamEmployeeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [OrganizationTeamEmployee])
  async organizationTeamEmployees(
    @graphql.Args() args: OrganizationTeamEmployeeFindManyArgs
  ): Promise<OrganizationTeamEmployee[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => OrganizationTeamEmployee, { nullable: true })
  async organizationTeamEmployee(
    @graphql.Args() args: OrganizationTeamEmployeeFindUniqueArgs
  ): Promise<OrganizationTeamEmployee | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => OrganizationTeamEmployee)
  async createOrganizationTeamEmployee(
    @graphql.Args() args: CreateOrganizationTeamEmployeeArgs
  ): Promise<OrganizationTeamEmployee> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        organizationTeam: {
          connect: args.data.organizationTeam,
        },

        employee: {
          connect: args.data.employee,
        },

        role: args.data.role
          ? {
              connect: args.data.role,
            }
          : undefined,

        organization: args.data.organization
          ? {
              connect: args.data.organization,
            }
          : undefined,

        tenant: args.data.tenant
          ? {
              connect: args.data.tenant,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => OrganizationTeamEmployee)
  async updateOrganizationTeamEmployee(
    @graphql.Args() args: UpdateOrganizationTeamEmployeeArgs
  ): Promise<OrganizationTeamEmployee | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          organizationTeam: {
            connect: args.data.organizationTeam,
          },

          employee: {
            connect: args.data.employee,
          },

          role: args.data.role
            ? {
                connect: args.data.role,
              }
            : undefined,

          organization: args.data.organization
            ? {
                connect: args.data.organization,
              }
            : undefined,

          tenant: args.data.tenant
            ? {
                connect: args.data.tenant,
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

  @graphql.Mutation(() => OrganizationTeamEmployee)
  async deleteOrganizationTeamEmployee(
    @graphql.Args() args: DeleteOrganizationTeamEmployeeArgs
  ): Promise<OrganizationTeamEmployee | null> {
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

  @graphql.ResolveField(() => OrganizationTeam, {
    nullable: true,
    name: "organizationTeam",
  })
  async resolveFieldOrganizationTeam(
    @graphql.Parent() parent: OrganizationTeamEmployee
  ): Promise<OrganizationTeam | null> {
    const result = await this.service.getOrganizationTeam(parent.id);

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
    @graphql.Parent() parent: OrganizationTeamEmployee
  ): Promise<Employee | null> {
    const result = await this.service.getEmployee(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Role, {
    nullable: true,
    name: "role",
  })
  async resolveFieldRole(
    @graphql.Parent() parent: OrganizationTeamEmployee
  ): Promise<Role | null> {
    const result = await this.service.getRole(parent.id);

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
    @graphql.Parent() parent: OrganizationTeamEmployee
  ): Promise<Organization | null> {
    const result = await this.service.getOrganization(parent.id);

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
    @graphql.Parent() parent: OrganizationTeamEmployee
  ): Promise<Tenant | null> {
    const result = await this.service.getTenant(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}