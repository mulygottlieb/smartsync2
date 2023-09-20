/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrganizationEmploymentTypeEmployeeWhereUniqueInput } from "./OrganizationEmploymentTypeEmployeeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { OrganizationEmploymentTypeEmployeeUpdateInput } from "./OrganizationEmploymentTypeEmployeeUpdateInput";

@ArgsType()
class UpdateOrganizationEmploymentTypeEmployeeArgs {
  @ApiProperty({
    required: true,
    type: () => OrganizationEmploymentTypeEmployeeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationEmploymentTypeEmployeeWhereUniqueInput)
  @Field(() => OrganizationEmploymentTypeEmployeeWhereUniqueInput, {
    nullable: false,
  })
  where!: OrganizationEmploymentTypeEmployeeWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => OrganizationEmploymentTypeEmployeeUpdateInput,
  })
  @ValidateNested()
  @Type(() => OrganizationEmploymentTypeEmployeeUpdateInput)
  @Field(() => OrganizationEmploymentTypeEmployeeUpdateInput, {
    nullable: false,
  })
  data!: OrganizationEmploymentTypeEmployeeUpdateInput;
}

export { UpdateOrganizationEmploymentTypeEmployeeArgs as UpdateOrganizationEmploymentTypeEmployeeArgs };