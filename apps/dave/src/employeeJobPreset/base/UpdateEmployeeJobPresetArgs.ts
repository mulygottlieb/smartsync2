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
import { EmployeeJobPresetWhereUniqueInput } from "./EmployeeJobPresetWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EmployeeJobPresetUpdateInput } from "./EmployeeJobPresetUpdateInput";

@ArgsType()
class UpdateEmployeeJobPresetArgs {
  @ApiProperty({
    required: true,
    type: () => EmployeeJobPresetWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EmployeeJobPresetWhereUniqueInput)
  @Field(() => EmployeeJobPresetWhereUniqueInput, { nullable: false })
  where!: EmployeeJobPresetWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => EmployeeJobPresetUpdateInput,
  })
  @ValidateNested()
  @Type(() => EmployeeJobPresetUpdateInput)
  @Field(() => EmployeeJobPresetUpdateInput, { nullable: false })
  data!: EmployeeJobPresetUpdateInput;
}

export { UpdateEmployeeJobPresetArgs as UpdateEmployeeJobPresetArgs };
