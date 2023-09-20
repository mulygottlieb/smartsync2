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
import { TagEventTypeCreateInput } from "./TagEventTypeCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateTagEventTypeArgs {
  @ApiProperty({
    required: true,
    type: () => TagEventTypeCreateInput,
  })
  @ValidateNested()
  @Type(() => TagEventTypeCreateInput)
  @Field(() => TagEventTypeCreateInput, { nullable: false })
  data!: TagEventTypeCreateInput;
}

export { CreateTagEventTypeArgs as CreateTagEventTypeArgs };
