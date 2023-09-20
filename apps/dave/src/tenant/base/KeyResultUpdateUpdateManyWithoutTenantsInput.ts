/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { KeyResultUpdateWhereUniqueInput } from "../../keyResultUpdate/base/KeyResultUpdateWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class KeyResultUpdateUpdateManyWithoutTenantsInput {
  @Field(() => [KeyResultUpdateWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [KeyResultUpdateWhereUniqueInput],
  })
  connect?: Array<KeyResultUpdateWhereUniqueInput>;

  @Field(() => [KeyResultUpdateWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [KeyResultUpdateWhereUniqueInput],
  })
  disconnect?: Array<KeyResultUpdateWhereUniqueInput>;

  @Field(() => [KeyResultUpdateWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [KeyResultUpdateWhereUniqueInput],
  })
  set?: Array<KeyResultUpdateWhereUniqueInput>;
}

export { KeyResultUpdateUpdateManyWithoutTenantsInput as KeyResultUpdateUpdateManyWithoutTenantsInput };
