/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CandidateDocumentWhereUniqueInput } from "../../candidateDocument/base/CandidateDocumentWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CandidateDocumentUpdateManyWithoutTenantsInput {
  @Field(() => [CandidateDocumentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CandidateDocumentWhereUniqueInput],
  })
  connect?: Array<CandidateDocumentWhereUniqueInput>;

  @Field(() => [CandidateDocumentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CandidateDocumentWhereUniqueInput],
  })
  disconnect?: Array<CandidateDocumentWhereUniqueInput>;

  @Field(() => [CandidateDocumentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CandidateDocumentWhereUniqueInput],
  })
  set?: Array<CandidateDocumentWhereUniqueInput>;
}

export { CandidateDocumentUpdateManyWithoutTenantsInput as CandidateDocumentUpdateManyWithoutTenantsInput };
