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
import { IsString, ValidateNested, IsOptional } from "class-validator";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { Type } from "class-transformer";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";
import { TagEmployeeLevelCreateNestedManyWithoutEmployeeLevelsInput } from "./TagEmployeeLevelCreateNestedManyWithoutEmployeeLevelsInput";

@InputType()
class EmployeeLevelCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  level!: string;

  @ApiProperty({
    required: false,
    type: () => OrganizationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationWhereUniqueInput)
  @IsOptional()
  @Field(() => OrganizationWhereUniqueInput, {
    nullable: true,
  })
  organization?: OrganizationWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => TenantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TenantWhereUniqueInput)
  @IsOptional()
  @Field(() => TenantWhereUniqueInput, {
    nullable: true,
  })
  tenant?: TenantWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => TagEmployeeLevelCreateNestedManyWithoutEmployeeLevelsInput,
  })
  @ValidateNested()
  @Type(() => TagEmployeeLevelCreateNestedManyWithoutEmployeeLevelsInput)
  @IsOptional()
  @Field(() => TagEmployeeLevelCreateNestedManyWithoutEmployeeLevelsInput, {
    nullable: true,
  })
  tagEmployeeLevel?: TagEmployeeLevelCreateNestedManyWithoutEmployeeLevelsInput;
}

export { EmployeeLevelCreateInput as EmployeeLevelCreateInput };
