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
import { CandidatePersonalQualityWhereInput } from "./CandidatePersonalQualityWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CandidatePersonalQualityOrderByInput } from "./CandidatePersonalQualityOrderByInput";

@ArgsType()
class CandidatePersonalQualityFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CandidatePersonalQualityWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CandidatePersonalQualityWhereInput, { nullable: true })
  @Type(() => CandidatePersonalQualityWhereInput)
  where?: CandidatePersonalQualityWhereInput;

  @ApiProperty({
    required: false,
    type: [CandidatePersonalQualityOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CandidatePersonalQualityOrderByInput], { nullable: true })
  @Type(() => CandidatePersonalQualityOrderByInput)
  orderBy?: Array<CandidatePersonalQualityOrderByInput>;

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

export { CandidatePersonalQualityFindManyArgs as CandidatePersonalQualityFindManyArgs };