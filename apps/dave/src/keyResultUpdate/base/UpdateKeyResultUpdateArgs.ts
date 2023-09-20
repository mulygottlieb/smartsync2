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
import { KeyResultUpdateWhereUniqueInput } from "./KeyResultUpdateWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { KeyResultUpdateUpdateInput } from "./KeyResultUpdateUpdateInput";

@ArgsType()
class UpdateKeyResultUpdateArgs {
  @ApiProperty({
    required: true,
    type: () => KeyResultUpdateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => KeyResultUpdateWhereUniqueInput)
  @Field(() => KeyResultUpdateWhereUniqueInput, { nullable: false })
  where!: KeyResultUpdateWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => KeyResultUpdateUpdateInput,
  })
  @ValidateNested()
  @Type(() => KeyResultUpdateUpdateInput)
  @Field(() => KeyResultUpdateUpdateInput, { nullable: false })
  data!: KeyResultUpdateUpdateInput;
}

export { UpdateKeyResultUpdateArgs as UpdateKeyResultUpdateArgs };
