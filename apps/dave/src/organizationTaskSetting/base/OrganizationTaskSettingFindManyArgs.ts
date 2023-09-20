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
import { OrganizationTaskSettingWhereInput } from "./OrganizationTaskSettingWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { OrganizationTaskSettingOrderByInput } from "./OrganizationTaskSettingOrderByInput";

@ArgsType()
class OrganizationTaskSettingFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => OrganizationTaskSettingWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => OrganizationTaskSettingWhereInput, { nullable: true })
  @Type(() => OrganizationTaskSettingWhereInput)
  where?: OrganizationTaskSettingWhereInput;

  @ApiProperty({
    required: false,
    type: [OrganizationTaskSettingOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [OrganizationTaskSettingOrderByInput], { nullable: true })
  @Type(() => OrganizationTaskSettingOrderByInput)
  orderBy?: Array<OrganizationTaskSettingOrderByInput>;

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

export { OrganizationTaskSettingFindManyArgs as OrganizationTaskSettingFindManyArgs };
