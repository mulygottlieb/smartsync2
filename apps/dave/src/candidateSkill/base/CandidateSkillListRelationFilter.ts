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
import { CandidateSkillWhereInput } from "./CandidateSkillWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CandidateSkillListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CandidateSkillWhereInput,
  })
  @ValidateNested()
  @Type(() => CandidateSkillWhereInput)
  @IsOptional()
  @Field(() => CandidateSkillWhereInput, {
    nullable: true,
  })
  every?: CandidateSkillWhereInput;

  @ApiProperty({
    required: false,
    type: () => CandidateSkillWhereInput,
  })
  @ValidateNested()
  @Type(() => CandidateSkillWhereInput)
  @IsOptional()
  @Field(() => CandidateSkillWhereInput, {
    nullable: true,
  })
  some?: CandidateSkillWhereInput;

  @ApiProperty({
    required: false,
    type: () => CandidateSkillWhereInput,
  })
  @ValidateNested()
  @Type(() => CandidateSkillWhereInput)
  @IsOptional()
  @Field(() => CandidateSkillWhereInput, {
    nullable: true,
  })
  none?: CandidateSkillWhereInput;
}
export { CandidateSkillListRelationFilter as CandidateSkillListRelationFilter };
