/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { InvoiceItemWhereUniqueInput } from "../../invoiceItem/base/InvoiceItemWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class InvoiceItemUpdateManyWithoutOrganizationProjectsInput {
  @Field(() => [InvoiceItemWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InvoiceItemWhereUniqueInput],
  })
  connect?: Array<InvoiceItemWhereUniqueInput>;

  @Field(() => [InvoiceItemWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InvoiceItemWhereUniqueInput],
  })
  disconnect?: Array<InvoiceItemWhereUniqueInput>;

  @Field(() => [InvoiceItemWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InvoiceItemWhereUniqueInput],
  })
  set?: Array<InvoiceItemWhereUniqueInput>;
}

export { InvoiceItemUpdateManyWithoutOrganizationProjectsInput as InvoiceItemUpdateManyWithoutOrganizationProjectsInput };
