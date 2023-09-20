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
import { KeyResultTemplateWhereInput } from "./KeyResultTemplateWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { KeyResultTemplateOrderByInput } from "./KeyResultTemplateOrderByInput";

@ArgsType()
class KeyResultTemplateFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => KeyResultTemplateWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => KeyResultTemplateWhereInput, { nullable: true })
  @Type(() => KeyResultTemplateWhereInput)
  where?: KeyResultTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: [KeyResultTemplateOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [KeyResultTemplateOrderByInput], { nullable: true })
  @Type(() => KeyResultTemplateOrderByInput)
  orderBy?: Array<KeyResultTemplateOrderByInput>;

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

export { KeyResultTemplateFindManyArgs as KeyResultTemplateFindManyArgs };
