/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { OrganizationRecurringExpenseWhereUniqueInput } from "../../organizationRecurringExpense/base/OrganizationRecurringExpenseWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class OrganizationRecurringExpenseUpdateManyWithoutOrganizationsInput {
  @Field(() => [OrganizationRecurringExpenseWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationRecurringExpenseWhereUniqueInput],
  })
  connect?: Array<OrganizationRecurringExpenseWhereUniqueInput>;

  @Field(() => [OrganizationRecurringExpenseWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationRecurringExpenseWhereUniqueInput],
  })
  disconnect?: Array<OrganizationRecurringExpenseWhereUniqueInput>;

  @Field(() => [OrganizationRecurringExpenseWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationRecurringExpenseWhereUniqueInput],
  })
  set?: Array<OrganizationRecurringExpenseWhereUniqueInput>;
}

export { OrganizationRecurringExpenseUpdateManyWithoutOrganizationsInput as OrganizationRecurringExpenseUpdateManyWithoutOrganizationsInput };
