/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CandidateInterviewerWhereUniqueInput } from "../../candidateInterviewer/base/CandidateInterviewerWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CandidateInterviewerUpdateManyWithoutCandidateInterviewsInput {
  @Field(() => [CandidateInterviewerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CandidateInterviewerWhereUniqueInput],
  })
  connect?: Array<CandidateInterviewerWhereUniqueInput>;

  @Field(() => [CandidateInterviewerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CandidateInterviewerWhereUniqueInput],
  })
  disconnect?: Array<CandidateInterviewerWhereUniqueInput>;

  @Field(() => [CandidateInterviewerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CandidateInterviewerWhereUniqueInput],
  })
  set?: Array<CandidateInterviewerWhereUniqueInput>;
}

export { CandidateInterviewerUpdateManyWithoutCandidateInterviewsInput as CandidateInterviewerUpdateManyWithoutCandidateInterviewsInput };
