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
import {
  IsString,
  IsDate,
  IsNumber,
  IsOptional,
  IsBoolean,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { Decimal } from "decimal.js";
import { OrganizationContact } from "../../organizationContact/base/OrganizationContact";
import { Organization } from "../../organization/base/Organization";
import { Tenant } from "../../tenant/base/Tenant";
import { Employee } from "../../employee/base/Employee";
import { TagIncome } from "../../tagIncome/base/TagIncome";

@ObjectType()
class Income {
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
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Float)
  amount!: Decimal;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  currency!: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  valueDate!: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  notes!: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isBonus!: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  reference!: string | null;

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
    type: () => Organization,
  })
  @ValidateNested()
  @Type(() => Organization)
  @IsOptional()
  organization?: Organization | null;

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
    type: () => Employee,
  })
  @ValidateNested()
  @Type(() => Employee)
  @IsOptional()
  employee?: Employee | null;

  @ApiProperty({
    required: false,
    type: () => [TagIncome],
  })
  @ValidateNested()
  @Type(() => TagIncome)
  @IsOptional()
  tagIncome?: Array<TagIncome>;
}

export { Income as Income };