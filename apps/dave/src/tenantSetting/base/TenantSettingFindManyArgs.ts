/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TenantSettingWhereInput } from "./TenantSettingWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TenantSettingOrderByInput } from "./TenantSettingOrderByInput";

@ArgsType()
class TenantSettingFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TenantSettingWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TenantSettingWhereInput, { nullable: true })
  @Type(() => TenantSettingWhereInput)
  where?: TenantSettingWhereInput;

  @ApiProperty({
    required: false,
    type: [TenantSettingOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TenantSettingOrderByInput], { nullable: true })
  @Type(() => TenantSettingOrderByInput)
  orderBy?: Array<TenantSettingOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TenantSettingFindManyArgs as TenantSettingFindManyArgs };