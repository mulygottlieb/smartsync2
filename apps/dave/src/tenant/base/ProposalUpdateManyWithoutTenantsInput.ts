/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ProposalWhereUniqueInput } from "../../proposal/base/ProposalWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ProposalUpdateManyWithoutTenantsInput {
  @Field(() => [ProposalWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProposalWhereUniqueInput],
  })
  connect?: Array<ProposalWhereUniqueInput>;

  @Field(() => [ProposalWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProposalWhereUniqueInput],
  })
  disconnect?: Array<ProposalWhereUniqueInput>;

  @Field(() => [ProposalWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProposalWhereUniqueInput],
  })
  set?: Array<ProposalWhereUniqueInput>;
}

export { ProposalUpdateManyWithoutTenantsInput as ProposalUpdateManyWithoutTenantsInput };
