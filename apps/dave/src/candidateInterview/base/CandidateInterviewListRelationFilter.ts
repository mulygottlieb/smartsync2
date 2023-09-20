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
import { CandidateInterviewWhereInput } from "./CandidateInterviewWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CandidateInterviewListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CandidateInterviewWhereInput,
  })
  @ValidateNested()
  @Type(() => CandidateInterviewWhereInput)
  @IsOptional()
  @Field(() => CandidateInterviewWhereInput, {
    nullable: true,
  })
  every?: CandidateInterviewWhereInput;

  @ApiProperty({
    required: false,
    type: () => CandidateInterviewWhereInput,
  })
  @ValidateNested()
  @Type(() => CandidateInterviewWhereInput)
  @IsOptional()
  @Field(() => CandidateInterviewWhereInput, {
    nullable: true,
  })
  some?: CandidateInterviewWhereInput;

  @ApiProperty({
    required: false,
    type: () => CandidateInterviewWhereInput,
  })
  @ValidateNested()
  @Type(() => CandidateInterviewWhereInput)
  @IsOptional()
  @Field(() => CandidateInterviewWhereInput, {
    nullable: true,
  })
  none?: CandidateInterviewWhereInput;
}
export { CandidateInterviewListRelationFilter as CandidateInterviewListRelationFilter };
