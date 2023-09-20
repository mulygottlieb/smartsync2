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
import {
  IsString,
  IsOptional,
  IsDate,
  IsInt,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";
import { RoleWhereUniqueInput } from "../../role/base/RoleWhereUniqueInput";
import { InviteOrganizationContactUpdateManyWithoutInvitesInput } from "./InviteOrganizationContactUpdateManyWithoutInvitesInput";
import { InviteOrganizationDepartmentUpdateManyWithoutInvitesInput } from "./InviteOrganizationDepartmentUpdateManyWithoutInvitesInput";
import { InviteOrganizationProjectUpdateManyWithoutInvitesInput } from "./InviteOrganizationProjectUpdateManyWithoutInvitesInput";
import { InviteOrganizationTeamUpdateManyWithoutInvitesInput } from "./InviteOrganizationTeamUpdateManyWithoutInvitesInput";

@InputType()
class InviteUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  token?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  status?: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  expireDate?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  actionDate?: Date | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  code?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  fullName?: string | null;

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
  userInviteInvitedByIdTouser?: UserWhereUniqueInput | null;

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
    type: () => RoleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RoleWhereUniqueInput)
  @IsOptional()
  @Field(() => RoleWhereUniqueInput, {
    nullable: true,
  })
  role?: RoleWhereUniqueInput | null;

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
  userInviteUserIdTouser?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => InviteOrganizationContactUpdateManyWithoutInvitesInput,
  })
  @ValidateNested()
  @Type(() => InviteOrganizationContactUpdateManyWithoutInvitesInput)
  @IsOptional()
  @Field(() => InviteOrganizationContactUpdateManyWithoutInvitesInput, {
    nullable: true,
  })
  inviteOrganizationContact?: InviteOrganizationContactUpdateManyWithoutInvitesInput;

  @ApiProperty({
    required: false,
    type: () => InviteOrganizationDepartmentUpdateManyWithoutInvitesInput,
  })
  @ValidateNested()
  @Type(() => InviteOrganizationDepartmentUpdateManyWithoutInvitesInput)
  @IsOptional()
  @Field(() => InviteOrganizationDepartmentUpdateManyWithoutInvitesInput, {
    nullable: true,
  })
  inviteOrganizationDepartment?: InviteOrganizationDepartmentUpdateManyWithoutInvitesInput;

  @ApiProperty({
    required: false,
    type: () => InviteOrganizationProjectUpdateManyWithoutInvitesInput,
  })
  @ValidateNested()
  @Type(() => InviteOrganizationProjectUpdateManyWithoutInvitesInput)
  @IsOptional()
  @Field(() => InviteOrganizationProjectUpdateManyWithoutInvitesInput, {
    nullable: true,
  })
  inviteOrganizationProject?: InviteOrganizationProjectUpdateManyWithoutInvitesInput;

  @ApiProperty({
    required: false,
    type: () => InviteOrganizationTeamUpdateManyWithoutInvitesInput,
  })
  @ValidateNested()
  @Type(() => InviteOrganizationTeamUpdateManyWithoutInvitesInput)
  @IsOptional()
  @Field(() => InviteOrganizationTeamUpdateManyWithoutInvitesInput, {
    nullable: true,
  })
  inviteOrganizationTeam?: InviteOrganizationTeamUpdateManyWithoutInvitesInput;
}

export { InviteUpdateInput as InviteUpdateInput };
