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
import { ImportHistoryWhereUniqueInput } from "./ImportHistoryWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ImportHistoryUpdateInput } from "./ImportHistoryUpdateInput";

@ArgsType()
class UpdateImportHistoryArgs {
  @ApiProperty({
    required: true,
    type: () => ImportHistoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ImportHistoryWhereUniqueInput)
  @Field(() => ImportHistoryWhereUniqueInput, { nullable: false })
  where!: ImportHistoryWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ImportHistoryUpdateInput,
  })
  @ValidateNested()
  @Type(() => ImportHistoryUpdateInput)
  @Field(() => ImportHistoryUpdateInput, { nullable: false })
  data!: ImportHistoryUpdateInput;
}

export { UpdateImportHistoryArgs as UpdateImportHistoryArgs };
