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
import { EmailSentWhereInput } from "./EmailSentWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { EmailSentOrderByInput } from "./EmailSentOrderByInput";

@ArgsType()
class EmailSentFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EmailSentWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => EmailSentWhereInput, { nullable: true })
  @Type(() => EmailSentWhereInput)
  where?: EmailSentWhereInput;

  @ApiProperty({
    required: false,
    type: [EmailSentOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [EmailSentOrderByInput], { nullable: true })
  @Type(() => EmailSentOrderByInput)
  orderBy?: Array<EmailSentOrderByInput>;

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

export { EmailSentFindManyArgs as EmailSentFindManyArgs };