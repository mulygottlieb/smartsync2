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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { EquipmentSharingPolicyWhereUniqueInput } from "../../equipmentSharingPolicy/base/EquipmentSharingPolicyWhereUniqueInput";
import { EquipmentWhereUniqueInput } from "../../equipment/base/EquipmentWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";
import { EquipmentSharesEmployeeListRelationFilter } from "../../equipmentSharesEmployee/base/EquipmentSharesEmployeeListRelationFilter";
import { EquipmentSharesTeamListRelationFilter } from "../../equipmentSharesTeam/base/EquipmentSharesTeamListRelationFilter";

@InputType()
class EquipmentSharingWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  shareRequestDay?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  shareStartDay?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  shareEndDay?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  status?: IntFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  createdBy?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  createdByName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => EquipmentSharingPolicyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EquipmentSharingPolicyWhereUniqueInput)
  @IsOptional()
  @Field(() => EquipmentSharingPolicyWhereUniqueInput, {
    nullable: true,
  })
  equipmentSharingPolicy?: EquipmentSharingPolicyWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => EquipmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EquipmentWhereUniqueInput)
  @IsOptional()
  @Field(() => EquipmentWhereUniqueInput, {
    nullable: true,
  })
  equipment?: EquipmentWhereUniqueInput;

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
  organization?: OrganizationWhereUniqueInput;

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
  tenant?: TenantWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => EquipmentSharesEmployeeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => EquipmentSharesEmployeeListRelationFilter)
  @IsOptional()
  @Field(() => EquipmentSharesEmployeeListRelationFilter, {
    nullable: true,
  })
  equipmentSharesEmployees?: EquipmentSharesEmployeeListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => EquipmentSharesTeamListRelationFilter,
  })
  @ValidateNested()
  @Type(() => EquipmentSharesTeamListRelationFilter)
  @IsOptional()
  @Field(() => EquipmentSharesTeamListRelationFilter, {
    nullable: true,
  })
  equipmentSharesTeams?: EquipmentSharesTeamListRelationFilter;
}

export { EquipmentSharingWhereInput as EquipmentSharingWhereInput };