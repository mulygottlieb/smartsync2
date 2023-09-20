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
import { IsString, IsDate, ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { Tenant } from "../../tenant/base/Tenant";
import { Organization } from "../../organization/base/Organization";
import { IntegrationEntitySetting } from "../../integrationEntitySetting/base/IntegrationEntitySetting";
import { IntegrationMap } from "../../integrationMap/base/IntegrationMap";
import { IntegrationSetting } from "../../integrationSetting/base/IntegrationSetting";

@ObjectType()
class IntegrationTenant {
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
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

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
    type: () => Organization,
  })
  @ValidateNested()
  @Type(() => Organization)
  @IsOptional()
  organization?: Organization | null;

  @ApiProperty({
    required: false,
    type: () => [IntegrationEntitySetting],
  })
  @ValidateNested()
  @Type(() => IntegrationEntitySetting)
  @IsOptional()
  integrationEntitySetting?: Array<IntegrationEntitySetting>;

  @ApiProperty({
    required: false,
    type: () => [IntegrationMap],
  })
  @ValidateNested()
  @Type(() => IntegrationMap)
  @IsOptional()
  integrationMap?: Array<IntegrationMap>;

  @ApiProperty({
    required: false,
    type: () => [IntegrationSetting],
  })
  @ValidateNested()
  @Type(() => IntegrationSetting)
  @IsOptional()
  integrationSetting?: Array<IntegrationSetting>;
}

export { IntegrationTenant as IntegrationTenant };