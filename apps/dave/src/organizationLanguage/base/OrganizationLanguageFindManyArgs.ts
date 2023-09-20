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
import { OrganizationLanguageWhereInput } from "./OrganizationLanguageWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { OrganizationLanguageOrderByInput } from "./OrganizationLanguageOrderByInput";

@ArgsType()
class OrganizationLanguageFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => OrganizationLanguageWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => OrganizationLanguageWhereInput, { nullable: true })
  @Type(() => OrganizationLanguageWhereInput)
  where?: OrganizationLanguageWhereInput;

  @ApiProperty({
    required: false,
    type: [OrganizationLanguageOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [OrganizationLanguageOrderByInput], { nullable: true })
  @Type(() => OrganizationLanguageOrderByInput)
  orderBy?: Array<OrganizationLanguageOrderByInput>;

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

export { OrganizationLanguageFindManyArgs as OrganizationLanguageFindManyArgs };