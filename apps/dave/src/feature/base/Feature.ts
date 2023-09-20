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
  IsBoolean,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { FeatureOrganization } from "../../featureOrganization/base/FeatureOrganization";

@ObjectType()
class Feature {
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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  code!: string;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isPaid!: boolean;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  image!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  link!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  status!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  icon!: string | null;

  @ApiProperty({
    required: false,
    type: () => Feature,
  })
  @ValidateNested()
  @Type(() => Feature)
  @IsOptional()
  feature?: Feature | null;

  @ApiProperty({
    required: false,
    type: () => [Feature],
  })
  @ValidateNested()
  @Type(() => Feature)
  @IsOptional()
  otherFeature?: Array<Feature>;

  @ApiProperty({
    required: false,
    type: () => [FeatureOrganization],
  })
  @ValidateNested()
  @Type(() => FeatureOrganization)
  @IsOptional()
  featureOrganization?: Array<FeatureOrganization>;
}

export { Feature as Feature };