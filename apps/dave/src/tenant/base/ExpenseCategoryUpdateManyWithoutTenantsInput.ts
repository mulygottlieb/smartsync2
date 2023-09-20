/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ExpenseCategoryWhereUniqueInput } from "../../expenseCategory/base/ExpenseCategoryWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ExpenseCategoryUpdateManyWithoutTenantsInput {
  @Field(() => [ExpenseCategoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ExpenseCategoryWhereUniqueInput],
  })
  connect?: Array<ExpenseCategoryWhereUniqueInput>;

  @Field(() => [ExpenseCategoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ExpenseCategoryWhereUniqueInput],
  })
  disconnect?: Array<ExpenseCategoryWhereUniqueInput>;

  @Field(() => [ExpenseCategoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ExpenseCategoryWhereUniqueInput],
  })
  set?: Array<ExpenseCategoryWhereUniqueInput>;
}

export { ExpenseCategoryUpdateManyWithoutTenantsInput as ExpenseCategoryUpdateManyWithoutTenantsInput };
