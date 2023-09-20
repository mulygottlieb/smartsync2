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
import { IsString, ValidateNested, IsOptional } from "class-validator";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";
import { Type } from "class-transformer";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { IntegrationEntitySettingCreateNestedManyWithoutIntegrationTenantsInput } from "./IntegrationEntitySettingCreateNestedManyWithoutIntegrationTenantsInput";
import { IntegrationMapCreateNestedManyWithoutIntegrationTenantsInput } from "./IntegrationMapCreateNestedManyWithoutIntegrationTenantsInput";
import { IntegrationSettingCreateNestedManyWithoutIntegrationTenantsInput } from "./IntegrationSettingCreateNestedManyWithoutIntegrationTenantsInput";

@InputType()
class IntegrationTenantCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

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
    type: () =>
      IntegrationEntitySettingCreateNestedManyWithoutIntegrationTenantsInput,
  })
  @ValidateNested()
  @Type(
    () => IntegrationEntitySettingCreateNestedManyWithoutIntegrationTenantsInput
  )
  @IsOptional()
  @Field(
    () =>
      IntegrationEntitySettingCreateNestedManyWithoutIntegrationTenantsInput,
    {
      nullable: true,
    }
  )
  integrationEntitySetting?: IntegrationEntitySettingCreateNestedManyWithoutIntegrationTenantsInput;

  @ApiProperty({
    required: false,
    type: () => IntegrationMapCreateNestedManyWithoutIntegrationTenantsInput,
  })
  @ValidateNested()
  @Type(() => IntegrationMapCreateNestedManyWithoutIntegrationTenantsInput)
  @IsOptional()
  @Field(() => IntegrationMapCreateNestedManyWithoutIntegrationTenantsInput, {
    nullable: true,
  })
  integrationMap?: IntegrationMapCreateNestedManyWithoutIntegrationTenantsInput;

  @ApiProperty({
    required: false,
    type: () =>
      IntegrationSettingCreateNestedManyWithoutIntegrationTenantsInput,
  })
  @ValidateNested()
  @Type(() => IntegrationSettingCreateNestedManyWithoutIntegrationTenantsInput)
  @IsOptional()
  @Field(
    () => IntegrationSettingCreateNestedManyWithoutIntegrationTenantsInput,
    {
      nullable: true,
    }
  )
  integrationSetting?: IntegrationSettingCreateNestedManyWithoutIntegrationTenantsInput;
}

export { IntegrationTenantCreateInput as IntegrationTenantCreateInput };