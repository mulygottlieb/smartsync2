/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { OrganizationDepartmentEmployeeWhereUniqueInput } from "../../organizationDepartmentEmployee/base/OrganizationDepartmentEmployeeWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class OrganizationDepartmentEmployeeUpdateManyWithoutEmployeesInput {
  @Field(() => [OrganizationDepartmentEmployeeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationDepartmentEmployeeWhereUniqueInput],
  })
  connect?: Array<OrganizationDepartmentEmployeeWhereUniqueInput>;

  @Field(() => [OrganizationDepartmentEmployeeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationDepartmentEmployeeWhereUniqueInput],
  })
  disconnect?: Array<OrganizationDepartmentEmployeeWhereUniqueInput>;

  @Field(() => [OrganizationDepartmentEmployeeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationDepartmentEmployeeWhereUniqueInput],
  })
  set?: Array<OrganizationDepartmentEmployeeWhereUniqueInput>;
}

export { OrganizationDepartmentEmployeeUpdateManyWithoutEmployeesInput as OrganizationDepartmentEmployeeUpdateManyWithoutEmployeesInput };
