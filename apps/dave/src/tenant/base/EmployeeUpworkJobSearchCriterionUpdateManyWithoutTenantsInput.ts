/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { EmployeeUpworkJobSearchCriterionWhereUniqueInput } from "../../employeeUpworkJobSearchCriterion/base/EmployeeUpworkJobSearchCriterionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class EmployeeUpworkJobSearchCriterionUpdateManyWithoutTenantsInput {
  @Field(() => [EmployeeUpworkJobSearchCriterionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EmployeeUpworkJobSearchCriterionWhereUniqueInput],
  })
  connect?: Array<EmployeeUpworkJobSearchCriterionWhereUniqueInput>;

  @Field(() => [EmployeeUpworkJobSearchCriterionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EmployeeUpworkJobSearchCriterionWhereUniqueInput],
  })
  disconnect?: Array<EmployeeUpworkJobSearchCriterionWhereUniqueInput>;

  @Field(() => [EmployeeUpworkJobSearchCriterionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EmployeeUpworkJobSearchCriterionWhereUniqueInput],
  })
  set?: Array<EmployeeUpworkJobSearchCriterionWhereUniqueInput>;
}

export { EmployeeUpworkJobSearchCriterionUpdateManyWithoutTenantsInput as EmployeeUpworkJobSearchCriterionUpdateManyWithoutTenantsInput };
