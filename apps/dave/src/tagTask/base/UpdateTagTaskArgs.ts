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
import { TagTaskWhereUniqueInput } from "./TagTaskWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TagTaskUpdateInput } from "./TagTaskUpdateInput";

@ArgsType()
class UpdateTagTaskArgs {
  @ApiProperty({
    required: true,
    type: () => TagTaskWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TagTaskWhereUniqueInput)
  @Field(() => TagTaskWhereUniqueInput, { nullable: false })
  where!: TagTaskWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TagTaskUpdateInput,
  })
  @ValidateNested()
  @Type(() => TagTaskUpdateInput)
  @Field(() => TagTaskUpdateInput, { nullable: false })
  data!: TagTaskUpdateInput;
}

export { UpdateTagTaskArgs as UpdateTagTaskArgs };