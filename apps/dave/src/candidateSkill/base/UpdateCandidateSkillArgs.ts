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
import { CandidateSkillWhereUniqueInput } from "./CandidateSkillWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CandidateSkillUpdateInput } from "./CandidateSkillUpdateInput";

@ArgsType()
class UpdateCandidateSkillArgs {
  @ApiProperty({
    required: true,
    type: () => CandidateSkillWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CandidateSkillWhereUniqueInput)
  @Field(() => CandidateSkillWhereUniqueInput, { nullable: false })
  where!: CandidateSkillWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CandidateSkillUpdateInput,
  })
  @ValidateNested()
  @Type(() => CandidateSkillUpdateInput)
  @Field(() => CandidateSkillUpdateInput, { nullable: false })
  data!: CandidateSkillUpdateInput;
}

export { UpdateCandidateSkillArgs as UpdateCandidateSkillArgs };
