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
import { CandidateTechnologyWhereInput } from "./CandidateTechnologyWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class CandidateTechnologyCountArgs {
  @ApiProperty({
    required: false,
    type: () => CandidateTechnologyWhereInput,
  })
  @Field(() => CandidateTechnologyWhereInput, { nullable: true })
  @Type(() => CandidateTechnologyWhereInput)
  where?: CandidateTechnologyWhereInput;
}

export { CandidateTechnologyCountArgs as CandidateTechnologyCountArgs };