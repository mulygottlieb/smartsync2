/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field, Float } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsNumber,
  IsBoolean,
  ValidateNested,
} from "class-validator";
import { Decimal } from "decimal.js";
import { OrganizationProjectWhereUniqueInput } from "../../organizationProject/base/OrganizationProjectWhereUniqueInput";
import { Type } from "class-transformer";
import { InvoiceWhereUniqueInput } from "../../invoice/base/InvoiceWhereUniqueInput";
import { TaskWhereUniqueInput } from "../../task/base/TaskWhereUniqueInput";
import { ExpenseWhereUniqueInput } from "../../expense/base/ExpenseWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../../employee/base/EmployeeWhereUniqueInput";
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";

@InputType()
class InvoiceItemUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  price?: Decimal;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  quantity?: Decimal;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  totalValue?: Decimal;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  applyTax?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  applyDiscount?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => OrganizationProjectWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationProjectWhereUniqueInput)
  @IsOptional()
  @Field(() => OrganizationProjectWhereUniqueInput, {
    nullable: true,
  })
  organizationProject?: OrganizationProjectWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => InvoiceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InvoiceWhereUniqueInput)
  @IsOptional()
  @Field(() => InvoiceWhereUniqueInput, {
    nullable: true,
  })
  invoice?: InvoiceWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => TaskWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TaskWhereUniqueInput)
  @IsOptional()
  @Field(() => TaskWhereUniqueInput, {
    nullable: true,
  })
  task?: TaskWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ExpenseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ExpenseWhereUniqueInput)
  @IsOptional()
  @Field(() => ExpenseWhereUniqueInput, {
    nullable: true,
  })
  expense?: ExpenseWhereUniqueInput | null;

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
  employee?: EmployeeWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ProductWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductWhereUniqueInput, {
    nullable: true,
  })
  product?: ProductWhereUniqueInput | null;

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
}

export { InvoiceItemUpdateInput as InvoiceItemUpdateInput };
