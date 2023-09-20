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
import { TagProductWhereUniqueInput } from "./TagProductWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TagProductUpdateInput } from "./TagProductUpdateInput";

@ArgsType()
class UpdateTagProductArgs {
  @ApiProperty({
    required: true,
    type: () => TagProductWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TagProductWhereUniqueInput)
  @Field(() => TagProductWhereUniqueInput, { nullable: false })
  where!: TagProductWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TagProductUpdateInput,
  })
  @ValidateNested()
  @Type(() => TagProductUpdateInput)
  @Field(() => TagProductUpdateInput, { nullable: false })
  data!: TagProductUpdateInput;
}

export { UpdateTagProductArgs as UpdateTagProductArgs };
