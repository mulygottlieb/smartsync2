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
import { TagEmployeeLevelWhereInput } from "./TagEmployeeLevelWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class TagEmployeeLevelCountArgs {
  @ApiProperty({
    required: false,
    type: () => TagEmployeeLevelWhereInput,
  })
  @Field(() => TagEmployeeLevelWhereInput, { nullable: true })
  @Type(() => TagEmployeeLevelWhereInput)
  where?: TagEmployeeLevelWhereInput;
}

export { TagEmployeeLevelCountArgs as TagEmployeeLevelCountArgs };