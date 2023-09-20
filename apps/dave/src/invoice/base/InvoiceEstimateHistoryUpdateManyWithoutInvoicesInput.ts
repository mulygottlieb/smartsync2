/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { InvoiceEstimateHistoryWhereUniqueInput } from "../../invoiceEstimateHistory/base/InvoiceEstimateHistoryWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class InvoiceEstimateHistoryUpdateManyWithoutInvoicesInput {
  @Field(() => [InvoiceEstimateHistoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InvoiceEstimateHistoryWhereUniqueInput],
  })
  connect?: Array<InvoiceEstimateHistoryWhereUniqueInput>;

  @Field(() => [InvoiceEstimateHistoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InvoiceEstimateHistoryWhereUniqueInput],
  })
  disconnect?: Array<InvoiceEstimateHistoryWhereUniqueInput>;

  @Field(() => [InvoiceEstimateHistoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InvoiceEstimateHistoryWhereUniqueInput],
  })
  set?: Array<InvoiceEstimateHistoryWhereUniqueInput>;
}

export { InvoiceEstimateHistoryUpdateManyWithoutInvoicesInput as InvoiceEstimateHistoryUpdateManyWithoutInvoicesInput };
