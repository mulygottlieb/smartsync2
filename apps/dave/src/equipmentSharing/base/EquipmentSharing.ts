/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsDate,
  IsOptional,
  IsInt,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { EquipmentSharingPolicy } from "../../equipmentSharingPolicy/base/EquipmentSharingPolicy";
import { Equipment } from "../../equipment/base/Equipment";
import { Organization } from "../../organization/base/Organization";
import { Tenant } from "../../tenant/base/Tenant";
import { EquipmentSharesEmployee } from "../../equipmentSharesEmployee/base/EquipmentSharesEmployee";
import { EquipmentSharesTeam } from "../../equipmentSharesTeam/base/EquipmentSharesTeam";

@ObjectType()
class EquipmentSharing {
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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name!: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  shareRequestDay!: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  shareStartDay!: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  shareEndDay!: Date | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  status!: number;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  createdBy!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  createdByName!: string | null;

  @ApiProperty({
    required: false,
    type: () => EquipmentSharingPolicy,
  })
  @ValidateNested()
  @Type(() => EquipmentSharingPolicy)
  @IsOptional()
  equipmentSharingPolicy?: EquipmentSharingPolicy | null;

  @ApiProperty({
    required: false,
    type: () => Equipment,
  })
  @ValidateNested()
  @Type(() => Equipment)
  @IsOptional()
  equipment?: Equipment | null;

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
    type: () => [EquipmentSharesEmployee],
  })
  @ValidateNested()
  @Type(() => EquipmentSharesEmployee)
  @IsOptional()
  equipmentSharesEmployees?: Array<EquipmentSharesEmployee>;

  @ApiProperty({
    required: false,
    type: () => [EquipmentSharesTeam],
  })
  @ValidateNested()
  @Type(() => EquipmentSharesTeam)
  @IsOptional()
  equipmentSharesTeams?: Array<EquipmentSharesTeam>;
}

export { EquipmentSharing as EquipmentSharing };