/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { JobPresetWhereUniqueInput } from "../../jobPreset/base/JobPresetWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class JobPresetUpdateManyWithoutOrganizationsInput {
  @Field(() => [JobPresetWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [JobPresetWhereUniqueInput],
  })
  connect?: Array<JobPresetWhereUniqueInput>;

  @Field(() => [JobPresetWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [JobPresetWhereUniqueInput],
  })
  disconnect?: Array<JobPresetWhereUniqueInput>;

  @Field(() => [JobPresetWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [JobPresetWhereUniqueInput],
  })
  set?: Array<JobPresetWhereUniqueInput>;
}

export { JobPresetUpdateManyWithoutOrganizationsInput as JobPresetUpdateManyWithoutOrganizationsInput };
