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
import { CandidateDepartmentUpdateManyWithoutOrganizationDepartmentsInput } from "./CandidateDepartmentUpdateManyWithoutOrganizationDepartmentsInput";
import { InviteOrganizationDepartmentUpdateManyWithoutOrganizationDepartmentsInput } from "./InviteOrganizationDepartmentUpdateManyWithoutOrganizationDepartmentsInput";
import { OrganizationDepartmentEmployeeUpdateManyWithoutOrganizationDepartmentsInput } from "./OrganizationDepartmentEmployeeUpdateManyWithoutOrganizationDepartmentsInput";
import { TagOrganizationDepartmentUpdateManyWithoutOrganizationDepartmentsInput } from "./TagOrganizationDepartmentUpdateManyWithoutOrganizationDepartmentsInput";

@InputType()
class OrganizationDepartmentUpdateInput {
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
      CandidateDepartmentUpdateManyWithoutOrganizationDepartmentsInput,
  })
  @ValidateNested()
  @Type(() => CandidateDepartmentUpdateManyWithoutOrganizationDepartmentsInput)
  @IsOptional()
  @Field(
    () => CandidateDepartmentUpdateManyWithoutOrganizationDepartmentsInput,
    {
      nullable: true,
    }
  )
  candidateDepartment?: CandidateDepartmentUpdateManyWithoutOrganizationDepartmentsInput;

  @ApiProperty({
    required: false,
    type: () =>
      InviteOrganizationDepartmentUpdateManyWithoutOrganizationDepartmentsInput,
  })
  @ValidateNested()
  @Type(
    () =>
      InviteOrganizationDepartmentUpdateManyWithoutOrganizationDepartmentsInput
  )
  @IsOptional()
  @Field(
    () =>
      InviteOrganizationDepartmentUpdateManyWithoutOrganizationDepartmentsInput,
    {
      nullable: true,
    }
  )
  inviteOrganizationDepartment?: InviteOrganizationDepartmentUpdateManyWithoutOrganizationDepartmentsInput;

  @ApiProperty({
    required: false,
    type: () =>
      OrganizationDepartmentEmployeeUpdateManyWithoutOrganizationDepartmentsInput,
  })
  @ValidateNested()
  @Type(
    () =>
      OrganizationDepartmentEmployeeUpdateManyWithoutOrganizationDepartmentsInput
  )
  @IsOptional()
  @Field(
    () =>
      OrganizationDepartmentEmployeeUpdateManyWithoutOrganizationDepartmentsInput,
    {
      nullable: true,
    }
  )
  organizationDepartmentEmployee?: OrganizationDepartmentEmployeeUpdateManyWithoutOrganizationDepartmentsInput;

  @ApiProperty({
    required: false,
    type: () =>
      TagOrganizationDepartmentUpdateManyWithoutOrganizationDepartmentsInput,
  })
  @ValidateNested()
  @Type(
    () => TagOrganizationDepartmentUpdateManyWithoutOrganizationDepartmentsInput
  )
  @IsOptional()
  @Field(
    () =>
      TagOrganizationDepartmentUpdateManyWithoutOrganizationDepartmentsInput,
    {
      nullable: true,
    }
  )
  tagOrganizationDepartment?: TagOrganizationDepartmentUpdateManyWithoutOrganizationDepartmentsInput;
}

export { OrganizationDepartmentUpdateInput as OrganizationDepartmentUpdateInput };