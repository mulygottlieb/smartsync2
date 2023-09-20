/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TagOrganizationExpenseCategoryWhereUniqueInput } from "../../tagOrganizationExpenseCategory/base/TagOrganizationExpenseCategoryWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TagOrganizationExpenseCategoryUpdateManyWithoutTagsInput {
  @Field(() => [TagOrganizationExpenseCategoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TagOrganizationExpenseCategoryWhereUniqueInput],
  })
  connect?: Array<TagOrganizationExpenseCategoryWhereUniqueInput>;

  @Field(() => [TagOrganizationExpenseCategoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TagOrganizationExpenseCategoryWhereUniqueInput],
  })
  disconnect?: Array<TagOrganizationExpenseCategoryWhereUniqueInput>;

  @Field(() => [TagOrganizationExpenseCategoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TagOrganizationExpenseCategoryWhereUniqueInput],
  })
  set?: Array<TagOrganizationExpenseCategoryWhereUniqueInput>;
}

export { TagOrganizationExpenseCategoryUpdateManyWithoutTagsInput as TagOrganizationExpenseCategoryUpdateManyWithoutTagsInput };
