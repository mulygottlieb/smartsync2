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
import { EquipmentSharingCreateNestedManyWithoutEquipmentSharingPoliciesInput } from "./EquipmentSharingCreateNestedManyWithoutEquipmentSharingPoliciesInput";

@InputType()
class EquipmentSharingPolicyCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

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
    type: () =>
      EquipmentSharingCreateNestedManyWithoutEquipmentSharingPoliciesInput,
  })
  @ValidateNested()
  @Type(
    () => EquipmentSharingCreateNestedManyWithoutEquipmentSharingPoliciesInput
  )
  @IsOptional()
  @Field(
    () => EquipmentSharingCreateNestedManyWithoutEquipmentSharingPoliciesInput,
    {
      nullable: true,
    }
  )
  equipmentSharing?: EquipmentSharingCreateNestedManyWithoutEquipmentSharingPoliciesInput;
}

export { EquipmentSharingPolicyCreateInput as EquipmentSharingPolicyCreateInput };
