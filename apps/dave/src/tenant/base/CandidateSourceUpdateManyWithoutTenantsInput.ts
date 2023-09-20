/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CandidateSourceWhereUniqueInput } from "../../candidateSource/base/CandidateSourceWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CandidateSourceUpdateManyWithoutTenantsInput {
  @Field(() => [CandidateSourceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CandidateSourceWhereUniqueInput],
  })
  connect?: Array<CandidateSourceWhereUniqueInput>;

  @Field(() => [CandidateSourceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CandidateSourceWhereUniqueInput],
  })
  disconnect?: Array<CandidateSourceWhereUniqueInput>;

  @Field(() => [CandidateSourceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CandidateSourceWhereUniqueInput],
  })
  set?: Array<CandidateSourceWhereUniqueInput>;
}

export { CandidateSourceUpdateManyWithoutTenantsInput as CandidateSourceUpdateManyWithoutTenantsInput };
