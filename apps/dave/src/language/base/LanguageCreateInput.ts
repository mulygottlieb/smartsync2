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
import { OrganizationLanguageCreateNestedManyWithoutLanguagesInput } from "./OrganizationLanguageCreateNestedManyWithoutLanguagesInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";

@InputType()
class LanguageCreateInput {
  @ApiProperty({
    required: false,
    type: () => OrganizationLanguageCreateNestedManyWithoutLanguagesInput,
  })
  @ValidateNested()
  @Type(() => OrganizationLanguageCreateNestedManyWithoutLanguagesInput)
  @IsOptional()
  @Field(() => OrganizationLanguageCreateNestedManyWithoutLanguagesInput, {
    nullable: true,
  })
  organizationLanguage?: OrganizationLanguageCreateNestedManyWithoutLanguagesInput;

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
  code?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isSystem?: boolean | null;

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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  color!: string;
}

export { LanguageCreateInput as LanguageCreateInput };
