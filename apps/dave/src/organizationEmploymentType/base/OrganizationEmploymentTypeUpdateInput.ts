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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";
import { Type } from "class-transformer";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { CandidateEmploymentTypeUpdateManyWithoutOrganizationEmploymentTypesInput } from "./CandidateEmploymentTypeUpdateManyWithoutOrganizationEmploymentTypesInput";
import { OrganizationEmploymentTypeEmployeeUpdateManyWithoutOrganizationEmploymentTypesInput } from "./OrganizationEmploymentTypeEmployeeUpdateManyWithoutOrganizationEmploymentTypesInput";
import { TagOrganizationEmploymentTypeUpdateManyWithoutOrganizationEmploymentTypesInput } from "./TagOrganizationEmploymentTypeUpdateManyWithoutOrganizationEmploymentTypesInput";

@InputType()
class OrganizationEmploymentTypeUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

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
    type: () =>
      CandidateEmploymentTypeUpdateManyWithoutOrganizationEmploymentTypesInput,
  })
  @ValidateNested()
  @Type(
    () =>
      CandidateEmploymentTypeUpdateManyWithoutOrganizationEmploymentTypesInput
  )
  @IsOptional()
  @Field(
    () =>
      CandidateEmploymentTypeUpdateManyWithoutOrganizationEmploymentTypesInput,
    {
      nullable: true,
    }
  )
  candidateEmploymentType?: CandidateEmploymentTypeUpdateManyWithoutOrganizationEmploymentTypesInput;

  @ApiProperty({
    required: false,
    type: () =>
      OrganizationEmploymentTypeEmployeeUpdateManyWithoutOrganizationEmploymentTypesInput,
  })
  @ValidateNested()
  @Type(
    () =>
      OrganizationEmploymentTypeEmployeeUpdateManyWithoutOrganizationEmploymentTypesInput
  )
  @IsOptional()
  @Field(
    () =>
      OrganizationEmploymentTypeEmployeeUpdateManyWithoutOrganizationEmploymentTypesInput,
    {
      nullable: true,
    }
  )
  organizationEmploymentTypeEmployee?: OrganizationEmploymentTypeEmployeeUpdateManyWithoutOrganizationEmploymentTypesInput;

  @ApiProperty({
    required: false,
    type: () =>
      TagOrganizationEmploymentTypeUpdateManyWithoutOrganizationEmploymentTypesInput,
  })
  @ValidateNested()
  @Type(
    () =>
      TagOrganizationEmploymentTypeUpdateManyWithoutOrganizationEmploymentTypesInput
  )
  @IsOptional()
  @Field(
    () =>
      TagOrganizationEmploymentTypeUpdateManyWithoutOrganizationEmploymentTypesInput,
    {
      nullable: true,
    }
  )
  tagOrganizationEmploymentType?: TagOrganizationEmploymentTypeUpdateManyWithoutOrganizationEmploymentTypesInput;
}

export { OrganizationEmploymentTypeUpdateInput as OrganizationEmploymentTypeUpdateInput };
