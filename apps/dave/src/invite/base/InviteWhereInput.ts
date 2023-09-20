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
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";
import { RoleWhereUniqueInput } from "../../role/base/RoleWhereUniqueInput";
import { InviteOrganizationContactListRelationFilter } from "../../inviteOrganizationContact/base/InviteOrganizationContactListRelationFilter";
import { InviteOrganizationDepartmentListRelationFilter } from "../../inviteOrganizationDepartment/base/InviteOrganizationDepartmentListRelationFilter";
import { InviteOrganizationProjectListRelationFilter } from "../../inviteOrganizationProject/base/InviteOrganizationProjectListRelationFilter";
import { InviteOrganizationTeamListRelationFilter } from "../../inviteOrganizationTeam/base/InviteOrganizationTeamListRelationFilter";

@InputType()
class InviteWhereInput {
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
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  token?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  email?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  status?: StringFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  expireDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  actionDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  code?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  fullName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  userInviteInvitedByIdTouser?: UserWhereUniqueInput;

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
    type: () => RoleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RoleWhereUniqueInput)
  @IsOptional()
  @Field(() => RoleWhereUniqueInput, {
    nullable: true,
  })
  role?: RoleWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  userInviteUserIdTouser?: UserWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => InviteOrganizationContactListRelationFilter,
  })
  @ValidateNested()
  @Type(() => InviteOrganizationContactListRelationFilter)
  @IsOptional()
  @Field(() => InviteOrganizationContactListRelationFilter, {
    nullable: true,
  })
  inviteOrganizationContact?: InviteOrganizationContactListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => InviteOrganizationDepartmentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => InviteOrganizationDepartmentListRelationFilter)
  @IsOptional()
  @Field(() => InviteOrganizationDepartmentListRelationFilter, {
    nullable: true,
  })
  inviteOrganizationDepartment?: InviteOrganizationDepartmentListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => InviteOrganizationProjectListRelationFilter,
  })
  @ValidateNested()
  @Type(() => InviteOrganizationProjectListRelationFilter)
  @IsOptional()
  @Field(() => InviteOrganizationProjectListRelationFilter, {
    nullable: true,
  })
  inviteOrganizationProject?: InviteOrganizationProjectListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => InviteOrganizationTeamListRelationFilter,
  })
  @ValidateNested()
  @Type(() => InviteOrganizationTeamListRelationFilter)
  @IsOptional()
  @Field(() => InviteOrganizationTeamListRelationFilter, {
    nullable: true,
  })
  inviteOrganizationTeam?: InviteOrganizationTeamListRelationFilter;
}

export { InviteWhereInput as InviteWhereInput };
