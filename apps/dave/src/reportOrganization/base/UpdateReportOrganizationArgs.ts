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
import { ReportOrganizationWhereUniqueInput } from "./ReportOrganizationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ReportOrganizationUpdateInput } from "./ReportOrganizationUpdateInput";

@ArgsType()
class UpdateReportOrganizationArgs {
  @ApiProperty({
    required: true,
    type: () => ReportOrganizationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ReportOrganizationWhereUniqueInput)
  @Field(() => ReportOrganizationWhereUniqueInput, { nullable: false })
  where!: ReportOrganizationWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ReportOrganizationUpdateInput,
  })
  @ValidateNested()
  @Type(() => ReportOrganizationUpdateInput)
  @Field(() => ReportOrganizationUpdateInput, { nullable: false })
  data!: ReportOrganizationUpdateInput;
}

export { UpdateReportOrganizationArgs as UpdateReportOrganizationArgs };