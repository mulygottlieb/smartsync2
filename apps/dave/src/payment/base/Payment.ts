/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field, Float } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Invoice } from "../../invoice/base/Invoice";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsDate,
  IsNumber,
  IsBoolean,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { OrganizationProject } from "../../organizationProject/base/OrganizationProject";
import { Organization } from "../../organization/base/Organization";
import { Decimal } from "decimal.js";
import { EnumPaymentPaymentMethod } from "./EnumPaymentPaymentMethod";
import { User } from "../../user/base/User";
import { Employee } from "../../employee/base/Employee";
import { Tenant } from "../../tenant/base/Tenant";
import { OrganizationContact } from "../../organizationContact/base/OrganizationContact";
import { TagPayment } from "../../tagPayment/base/TagPayment";

@ObjectType()
class Payment {
  @ApiProperty({
    required: false,
    type: () => Invoice,
  })
  @ValidateNested()
  @Type(() => Invoice)
  @IsOptional()
  invoice?: Invoice | null;

  @ApiProperty({
    required: false,
    type: () => OrganizationProject,
  })
  @ValidateNested()
  @Type(() => OrganizationProject)
  @IsOptional()
  organizationProject?: OrganizationProject | null;

  @ApiProperty({
    required: false,
    type: () => Organization,
  })
  @ValidateNested()
  @Type(() => Organization)
  @IsOptional()
  organization?: Organization | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  paymentDate!: Date | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  amount!: Decimal | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  note!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  currency!: string;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  overdue!: boolean | null;

  @ApiProperty({
    required: false,
    enum: EnumPaymentPaymentMethod,
  })
  @IsEnum(EnumPaymentPaymentMethod)
  @IsOptional()
  @Field(() => EnumPaymentPaymentMethod, {
    nullable: true,
  })
  paymentMethod?:
    | "BANK_TRANSFER"
    | "CASH"
    | "CHEQUE"
    | "CREDIT_CARD"
    | "DEBIT"
    | "ONLINE"
    | null;

  @ApiProperty({
    required: true,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  user?: User;

  @ApiProperty({
    required: false,
    type: () => Employee,
  })
  @ValidateNested()
  @Type(() => Employee)
  @IsOptional()
  employee?: Employee | null;

  @ApiProperty({
    required: false,
    type: () => Tenant,
  })
  @ValidateNested()
  @Type(() => Tenant)
  @IsOptional()
  tenant?: Tenant | null;

  @ApiProperty({
    required: false,
    type: () => OrganizationContact,
  })
  @ValidateNested()
  @Type(() => OrganizationContact)
  @IsOptional()
  organizationContact?: OrganizationContact | null;

  @ApiProperty({
    required: false,
    type: () => [TagPayment],
  })
  @ValidateNested()
  @Type(() => TagPayment)
  @IsOptional()
  tagPayment?: Array<TagPayment>;
}

export { Payment as Payment };