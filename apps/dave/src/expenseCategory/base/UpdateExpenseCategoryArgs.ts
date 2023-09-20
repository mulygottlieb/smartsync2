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
import { ExpenseCategoryWhereUniqueInput } from "./ExpenseCategoryWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ExpenseCategoryUpdateInput } from "./ExpenseCategoryUpdateInput";

@ArgsType()
class UpdateExpenseCategoryArgs {
  @ApiProperty({
    required: true,
    type: () => ExpenseCategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ExpenseCategoryWhereUniqueInput)
  @Field(() => ExpenseCategoryWhereUniqueInput, { nullable: false })
  where!: ExpenseCategoryWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ExpenseCategoryUpdateInput,
  })
  @ValidateNested()
  @Type(() => ExpenseCategoryUpdateInput)
  @Field(() => ExpenseCategoryUpdateInput, { nullable: false })
  data!: ExpenseCategoryUpdateInput;
}

export { UpdateExpenseCategoryArgs as UpdateExpenseCategoryArgs };
