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
import { E2WhereUniqueInput } from "./E2WhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { E2UpdateInput } from "./E2UpdateInput";

@ArgsType()
class UpdateE2Args {
  @ApiProperty({
    required: true,
    type: () => E2WhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => E2WhereUniqueInput)
  @Field(() => E2WhereUniqueInput, { nullable: false })
  where!: E2WhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => E2UpdateInput,
  })
  @ValidateNested()
  @Type(() => E2UpdateInput)
  @Field(() => E2UpdateInput, { nullable: false })
  data!: E2UpdateInput;
}

export { UpdateE2Args as UpdateE2Args };