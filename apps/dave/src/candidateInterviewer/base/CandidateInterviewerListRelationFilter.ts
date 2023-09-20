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
import { CandidateInterviewerWhereInput } from "./CandidateInterviewerWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CandidateInterviewerListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CandidateInterviewerWhereInput,
  })
  @ValidateNested()
  @Type(() => CandidateInterviewerWhereInput)
  @IsOptional()
  @Field(() => CandidateInterviewerWhereInput, {
    nullable: true,
  })
  every?: CandidateInterviewerWhereInput;

  @ApiProperty({
    required: false,
    type: () => CandidateInterviewerWhereInput,
  })
  @ValidateNested()
  @Type(() => CandidateInterviewerWhereInput)
  @IsOptional()
  @Field(() => CandidateInterviewerWhereInput, {
    nullable: true,
  })
  some?: CandidateInterviewerWhereInput;

  @ApiProperty({
    required: false,
    type: () => CandidateInterviewerWhereInput,
  })
  @ValidateNested()
  @Type(() => CandidateInterviewerWhereInput)
  @IsOptional()
  @Field(() => CandidateInterviewerWhereInput, {
    nullable: true,
  })
  none?: CandidateInterviewerWhereInput;
}
export { CandidateInterviewerListRelationFilter as CandidateInterviewerListRelationFilter };
