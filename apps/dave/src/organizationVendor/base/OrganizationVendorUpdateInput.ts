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
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { Type } from "class-transformer";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";
import { ExpenseUpdateManyWithoutOrganizationVendorsInput } from "./ExpenseUpdateManyWithoutOrganizationVendorsInput";
import { TagOrganizationVendorUpdateManyWithoutOrganizationVendorsInput } from "./TagOrganizationVendorUpdateManyWithoutOrganizationVendorsInput";

@InputType()
class OrganizationVendorUpdateInput {
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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phone?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  website?: string | null;

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
    type: () => ExpenseUpdateManyWithoutOrganizationVendorsInput,
  })
  @ValidateNested()
  @Type(() => ExpenseUpdateManyWithoutOrganizationVendorsInput)
  @IsOptional()
  @Field(() => ExpenseUpdateManyWithoutOrganizationVendorsInput, {
    nullable: true,
  })
  expense?: ExpenseUpdateManyWithoutOrganizationVendorsInput;

  @ApiProperty({
    required: false,
    type: () => TagOrganizationVendorUpdateManyWithoutOrganizationVendorsInput,
  })
  @ValidateNested()
  @Type(() => TagOrganizationVendorUpdateManyWithoutOrganizationVendorsInput)
  @IsOptional()
  @Field(() => TagOrganizationVendorUpdateManyWithoutOrganizationVendorsInput, {
    nullable: true,
  })
  tagOrganizationVendor?: TagOrganizationVendorUpdateManyWithoutOrganizationVendorsInput;
}

export { OrganizationVendorUpdateInput as OrganizationVendorUpdateInput };