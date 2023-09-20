/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrganizationEmploymentTypeWhereUniqueInput } from "../../organizationEmploymentType/base/OrganizationEmploymentTypeWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { EmployeeWhereUniqueInput } from "../../employee/base/EmployeeWhereUniqueInput";

@InputType()
class OrganizationEmploymentTypeEmployeeUpdateInput {
  @ApiProperty({
    required: false,
    type: () => OrganizationEmploymentTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationEmploymentTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => OrganizationEmploymentTypeWhereUniqueInput, {
    nullable: true,
  })
  organizationEmploymentType?: OrganizationEmploymentTypeWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => EmployeeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EmployeeWhereUniqueInput)
  @IsOptional()
  @Field(() => EmployeeWhereUniqueInput, {
    nullable: true,
  })
  employee?: EmployeeWhereUniqueInput;
}

export { OrganizationEmploymentTypeEmployeeUpdateInput as OrganizationEmploymentTypeEmployeeUpdateInput };