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
import { AccountingTemplateWhereUniqueInput } from "./AccountingTemplateWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AccountingTemplateUpdateInput } from "./AccountingTemplateUpdateInput";

@ArgsType()
class UpdateAccountingTemplateArgs {
  @ApiProperty({
    required: true,
    type: () => AccountingTemplateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AccountingTemplateWhereUniqueInput)
  @Field(() => AccountingTemplateWhereUniqueInput, { nullable: false })
  where!: AccountingTemplateWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AccountingTemplateUpdateInput,
  })
  @ValidateNested()
  @Type(() => AccountingTemplateUpdateInput)
  @Field(() => AccountingTemplateUpdateInput, { nullable: false })
  data!: AccountingTemplateUpdateInput;
}

export { UpdateAccountingTemplateArgs as UpdateAccountingTemplateArgs };
