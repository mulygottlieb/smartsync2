/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TagEmployeeWhereUniqueInput } from "../../tagEmployee/base/TagEmployeeWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TagEmployeeUpdateManyWithoutTagsInput {
  @Field(() => [TagEmployeeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TagEmployeeWhereUniqueInput],
  })
  connect?: Array<TagEmployeeWhereUniqueInput>;

  @Field(() => [TagEmployeeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TagEmployeeWhereUniqueInput],
  })
  disconnect?: Array<TagEmployeeWhereUniqueInput>;

  @Field(() => [TagEmployeeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TagEmployeeWhereUniqueInput],
  })
  set?: Array<TagEmployeeWhereUniqueInput>;
}

export { TagEmployeeUpdateManyWithoutTagsInput as TagEmployeeUpdateManyWithoutTagsInput };
