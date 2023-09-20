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
  IsBoolean,
  ValidateNested,
} from "class-validator";
import { OrganizationTeamWhereUniqueInput } from "../../organizationTeam/base/OrganizationTeamWhereUniqueInput";
import { Type } from "class-transformer";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { TagCandidateUpdateManyWithoutTagsInput } from "./TagCandidateUpdateManyWithoutTagsInput";
import { TagEmployeeUpdateManyWithoutTagsInput } from "./TagEmployeeUpdateManyWithoutTagsInput";
import { TagEmployeeLevelUpdateManyWithoutTagsInput } from "./TagEmployeeLevelUpdateManyWithoutTagsInput";
import { TagEquipmentUpdateManyWithoutTagsInput } from "./TagEquipmentUpdateManyWithoutTagsInput";
import { TagEventTypeUpdateManyWithoutTagsInput } from "./TagEventTypeUpdateManyWithoutTagsInput";
import { TagExpenseUpdateManyWithoutTagsInput } from "./TagExpenseUpdateManyWithoutTagsInput";
import { TagIncomeUpdateManyWithoutTagsInput } from "./TagIncomeUpdateManyWithoutTagsInput";
import { TagIntegrationUpdateManyWithoutTagsInput } from "./TagIntegrationUpdateManyWithoutTagsInput";
import { TagInvoiceUpdateManyWithoutTagsInput } from "./TagInvoiceUpdateManyWithoutTagsInput";
import { TagMerchantUpdateManyWithoutTagsInput } from "./TagMerchantUpdateManyWithoutTagsInput";
import { TagOrganizationUpdateManyWithoutTagsInput } from "./TagOrganizationUpdateManyWithoutTagsInput";
import { TagOrganizationContactUpdateManyWithoutTagsInput } from "./TagOrganizationContactUpdateManyWithoutTagsInput";
import { TagOrganizationDepartmentUpdateManyWithoutTagsInput } from "./TagOrganizationDepartmentUpdateManyWithoutTagsInput";
import { TagOrganizationEmploymentTypeUpdateManyWithoutTagsInput } from "./TagOrganizationEmploymentTypeUpdateManyWithoutTagsInput";
import { TagOrganizationExpenseCategoryUpdateManyWithoutTagsInput } from "./TagOrganizationExpenseCategoryUpdateManyWithoutTagsInput";
import { TagOrganizationPositionUpdateManyWithoutTagsInput } from "./TagOrganizationPositionUpdateManyWithoutTagsInput";
import { TagOrganizationProjectUpdateManyWithoutTagsInput } from "./TagOrganizationProjectUpdateManyWithoutTagsInput";
import { TagOrganizationTeamUpdateManyWithoutTagsInput } from "./TagOrganizationTeamUpdateManyWithoutTagsInput";
import { TagOrganizationVendorUpdateManyWithoutTagsInput } from "./TagOrganizationVendorUpdateManyWithoutTagsInput";
import { TagPaymentUpdateManyWithoutTagsInput } from "./TagPaymentUpdateManyWithoutTagsInput";
import { TagProductUpdateManyWithoutTagsInput } from "./TagProductUpdateManyWithoutTagsInput";
import { TagProposalUpdateManyWithoutTagsInput } from "./TagProposalUpdateManyWithoutTagsInput";
import { TagRequestApprovalUpdateManyWithoutTagsInput } from "./TagRequestApprovalUpdateManyWithoutTagsInput";
import { TagTaskUpdateManyWithoutTagsInput } from "./TagTaskUpdateManyWithoutTagsInput";
import { TagUserUpdateManyWithoutTagsInput } from "./TagUserUpdateManyWithoutTagsInput";
import { TagWarehouseUpdateManyWithoutTagsInput } from "./TagWarehouseUpdateManyWithoutTagsInput";

@InputType()
class TagUpdateInput {
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
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  color?: string;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isSystem?: boolean;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  icon?: string | null;

  @ApiProperty({
    required: false,
    type: () => OrganizationTeamWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationTeamWhereUniqueInput)
  @IsOptional()
  @Field(() => OrganizationTeamWhereUniqueInput, {
    nullable: true,
  })
  organizationTeam?: OrganizationTeamWhereUniqueInput | null;

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
    type: () => TagCandidateUpdateManyWithoutTagsInput,
  })
  @ValidateNested()
  @Type(() => TagCandidateUpdateManyWithoutTagsInput)
  @IsOptional()
  @Field(() => TagCandidateUpdateManyWithoutTagsInput, {
    nullable: true,
  })
  tagCandidate?: TagCandidateUpdateManyWithoutTagsInput;

  @ApiProperty({
    required: false,
    type: () => TagEmployeeUpdateManyWithoutTagsInput,
  })
  @ValidateNested()
  @Type(() => TagEmployeeUpdateManyWithoutTagsInput)
  @IsOptional()
  @Field(() => TagEmployeeUpdateManyWithoutTagsInput, {
    nullable: true,
  })
  tagEmployee?: TagEmployeeUpdateManyWithoutTagsInput;

  @ApiProperty({
    required: false,
    type: () => TagEmployeeLevelUpdateManyWithoutTagsInput,
  })
  @ValidateNested()
  @Type(() => TagEmployeeLevelUpdateManyWithoutTagsInput)
  @IsOptional()
  @Field(() => TagEmployeeLevelUpdateManyWithoutTagsInput, {
    nullable: true,
  })
  tagEmployeeLevel?: TagEmployeeLevelUpdateManyWithoutTagsInput;

  @ApiProperty({
    required: false,
    type: () => TagEquipmentUpdateManyWithoutTagsInput,
  })
  @ValidateNested()
  @Type(() => TagEquipmentUpdateManyWithoutTagsInput)
  @IsOptional()
  @Field(() => TagEquipmentUpdateManyWithoutTagsInput, {
    nullable: true,
  })
  tagEquipment?: TagEquipmentUpdateManyWithoutTagsInput;

  @ApiProperty({
    required: false,
    type: () => TagEventTypeUpdateManyWithoutTagsInput,
  })
  @ValidateNested()
  @Type(() => TagEventTypeUpdateManyWithoutTagsInput)
  @IsOptional()
  @Field(() => TagEventTypeUpdateManyWithoutTagsInput, {
    nullable: true,
  })
  tagEventType?: TagEventTypeUpdateManyWithoutTagsInput;

  @ApiProperty({
    required: false,
    type: () => TagExpenseUpdateManyWithoutTagsInput,
  })
  @ValidateNested()
  @Type(() => TagExpenseUpdateManyWithoutTagsInput)
  @IsOptional()
  @Field(() => TagExpenseUpdateManyWithoutTagsInput, {
    nullable: true,
  })
  tagExpense?: TagExpenseUpdateManyWithoutTagsInput;

  @ApiProperty({
    required: false,
    type: () => TagIncomeUpdateManyWithoutTagsInput,
  })
  @ValidateNested()
  @Type(() => TagIncomeUpdateManyWithoutTagsInput)
  @IsOptional()
  @Field(() => TagIncomeUpdateManyWithoutTagsInput, {
    nullable: true,
  })
  tagIncome?: TagIncomeUpdateManyWithoutTagsInput;

  @ApiProperty({
    required: false,
    type: () => TagIntegrationUpdateManyWithoutTagsInput,
  })
  @ValidateNested()
  @Type(() => TagIntegrationUpdateManyWithoutTagsInput)
  @IsOptional()
  @Field(() => TagIntegrationUpdateManyWithoutTagsInput, {
    nullable: true,
  })
  tagIntegration?: TagIntegrationUpdateManyWithoutTagsInput;

  @ApiProperty({
    required: false,
    type: () => TagInvoiceUpdateManyWithoutTagsInput,
  })
  @ValidateNested()
  @Type(() => TagInvoiceUpdateManyWithoutTagsInput)
  @IsOptional()
  @Field(() => TagInvoiceUpdateManyWithoutTagsInput, {
    nullable: true,
  })
  tagInvoice?: TagInvoiceUpdateManyWithoutTagsInput;

  @ApiProperty({
    required: false,
    type: () => TagMerchantUpdateManyWithoutTagsInput,
  })
  @ValidateNested()
  @Type(() => TagMerchantUpdateManyWithoutTagsInput)
  @IsOptional()
  @Field(() => TagMerchantUpdateManyWithoutTagsInput, {
    nullable: true,
  })
  tagMerchant?: TagMerchantUpdateManyWithoutTagsInput;

  @ApiProperty({
    required: false,
    type: () => TagOrganizationUpdateManyWithoutTagsInput,
  })
  @ValidateNested()
  @Type(() => TagOrganizationUpdateManyWithoutTagsInput)
  @IsOptional()
  @Field(() => TagOrganizationUpdateManyWithoutTagsInput, {
    nullable: true,
  })
  tagOrganization?: TagOrganizationUpdateManyWithoutTagsInput;

  @ApiProperty({
    required: false,
    type: () => TagOrganizationContactUpdateManyWithoutTagsInput,
  })
  @ValidateNested()
  @Type(() => TagOrganizationContactUpdateManyWithoutTagsInput)
  @IsOptional()
  @Field(() => TagOrganizationContactUpdateManyWithoutTagsInput, {
    nullable: true,
  })
  tagOrganizationContact?: TagOrganizationContactUpdateManyWithoutTagsInput;

  @ApiProperty({
    required: false,
    type: () => TagOrganizationDepartmentUpdateManyWithoutTagsInput,
  })
  @ValidateNested()
  @Type(() => TagOrganizationDepartmentUpdateManyWithoutTagsInput)
  @IsOptional()
  @Field(() => TagOrganizationDepartmentUpdateManyWithoutTagsInput, {
    nullable: true,
  })
  tagOrganizationDepartment?: TagOrganizationDepartmentUpdateManyWithoutTagsInput;

  @ApiProperty({
    required: false,
    type: () => TagOrganizationEmploymentTypeUpdateManyWithoutTagsInput,
  })
  @ValidateNested()
  @Type(() => TagOrganizationEmploymentTypeUpdateManyWithoutTagsInput)
  @IsOptional()
  @Field(() => TagOrganizationEmploymentTypeUpdateManyWithoutTagsInput, {
    nullable: true,
  })
  tagOrganizationEmploymentType?: TagOrganizationEmploymentTypeUpdateManyWithoutTagsInput;

  @ApiProperty({
    required: false,
    type: () => TagOrganizationExpenseCategoryUpdateManyWithoutTagsInput,
  })
  @ValidateNested()
  @Type(() => TagOrganizationExpenseCategoryUpdateManyWithoutTagsInput)
  @IsOptional()
  @Field(() => TagOrganizationExpenseCategoryUpdateManyWithoutTagsInput, {
    nullable: true,
  })
  tagOrganizationExpenseCategory?: TagOrganizationExpenseCategoryUpdateManyWithoutTagsInput;

  @ApiProperty({
    required: false,
    type: () => TagOrganizationPositionUpdateManyWithoutTagsInput,
  })
  @ValidateNested()
  @Type(() => TagOrganizationPositionUpdateManyWithoutTagsInput)
  @IsOptional()
  @Field(() => TagOrganizationPositionUpdateManyWithoutTagsInput, {
    nullable: true,
  })
  tagOrganizationPosition?: TagOrganizationPositionUpdateManyWithoutTagsInput;

  @ApiProperty({
    required: false,
    type: () => TagOrganizationProjectUpdateManyWithoutTagsInput,
  })
  @ValidateNested()
  @Type(() => TagOrganizationProjectUpdateManyWithoutTagsInput)
  @IsOptional()
  @Field(() => TagOrganizationProjectUpdateManyWithoutTagsInput, {
    nullable: true,
  })
  tagOrganizationProject?: TagOrganizationProjectUpdateManyWithoutTagsInput;

  @ApiProperty({
    required: false,
    type: () => TagOrganizationTeamUpdateManyWithoutTagsInput,
  })
  @ValidateNested()
  @Type(() => TagOrganizationTeamUpdateManyWithoutTagsInput)
  @IsOptional()
  @Field(() => TagOrganizationTeamUpdateManyWithoutTagsInput, {
    nullable: true,
  })
  tagOrganizationTeam?: TagOrganizationTeamUpdateManyWithoutTagsInput;

  @ApiProperty({
    required: false,
    type: () => TagOrganizationVendorUpdateManyWithoutTagsInput,
  })
  @ValidateNested()
  @Type(() => TagOrganizationVendorUpdateManyWithoutTagsInput)
  @IsOptional()
  @Field(() => TagOrganizationVendorUpdateManyWithoutTagsInput, {
    nullable: true,
  })
  tagOrganizationVendor?: TagOrganizationVendorUpdateManyWithoutTagsInput;

  @ApiProperty({
    required: false,
    type: () => TagPaymentUpdateManyWithoutTagsInput,
  })
  @ValidateNested()
  @Type(() => TagPaymentUpdateManyWithoutTagsInput)
  @IsOptional()
  @Field(() => TagPaymentUpdateManyWithoutTagsInput, {
    nullable: true,
  })
  tagPayment?: TagPaymentUpdateManyWithoutTagsInput;

  @ApiProperty({
    required: false,
    type: () => TagProductUpdateManyWithoutTagsInput,
  })
  @ValidateNested()
  @Type(() => TagProductUpdateManyWithoutTagsInput)
  @IsOptional()
  @Field(() => TagProductUpdateManyWithoutTagsInput, {
    nullable: true,
  })
  tagProduct?: TagProductUpdateManyWithoutTagsInput;

  @ApiProperty({
    required: false,
    type: () => TagProposalUpdateManyWithoutTagsInput,
  })
  @ValidateNested()
  @Type(() => TagProposalUpdateManyWithoutTagsInput)
  @IsOptional()
  @Field(() => TagProposalUpdateManyWithoutTagsInput, {
    nullable: true,
  })
  tagProposal?: TagProposalUpdateManyWithoutTagsInput;

  @ApiProperty({
    required: false,
    type: () => TagRequestApprovalUpdateManyWithoutTagsInput,
  })
  @ValidateNested()
  @Type(() => TagRequestApprovalUpdateManyWithoutTagsInput)
  @IsOptional()
  @Field(() => TagRequestApprovalUpdateManyWithoutTagsInput, {
    nullable: true,
  })
  tagRequestApproval?: TagRequestApprovalUpdateManyWithoutTagsInput;

  @ApiProperty({
    required: false,
    type: () => TagTaskUpdateManyWithoutTagsInput,
  })
  @ValidateNested()
  @Type(() => TagTaskUpdateManyWithoutTagsInput)
  @IsOptional()
  @Field(() => TagTaskUpdateManyWithoutTagsInput, {
    nullable: true,
  })
  tagTask?: TagTaskUpdateManyWithoutTagsInput;

  @ApiProperty({
    required: false,
    type: () => TagUserUpdateManyWithoutTagsInput,
  })
  @ValidateNested()
  @Type(() => TagUserUpdateManyWithoutTagsInput)
  @IsOptional()
  @Field(() => TagUserUpdateManyWithoutTagsInput, {
    nullable: true,
  })
  tagUser?: TagUserUpdateManyWithoutTagsInput;

  @ApiProperty({
    required: false,
    type: () => TagWarehouseUpdateManyWithoutTagsInput,
  })
  @ValidateNested()
  @Type(() => TagWarehouseUpdateManyWithoutTagsInput)
  @IsOptional()
  @Field(() => TagWarehouseUpdateManyWithoutTagsInput, {
    nullable: true,
  })
  tagWarehouse?: TagWarehouseUpdateManyWithoutTagsInput;
}

export { TagUpdateInput as TagUpdateInput };
