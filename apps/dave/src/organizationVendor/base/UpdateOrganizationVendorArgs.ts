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
import { OrganizationVendorWhereUniqueInput } from "./OrganizationVendorWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { OrganizationVendorUpdateInput } from "./OrganizationVendorUpdateInput";

@ArgsType()
class UpdateOrganizationVendorArgs {
  @ApiProperty({
    required: true,
    type: () => OrganizationVendorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationVendorWhereUniqueInput)
  @Field(() => OrganizationVendorWhereUniqueInput, { nullable: false })
  where!: OrganizationVendorWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => OrganizationVendorUpdateInput,
  })
  @ValidateNested()
  @Type(() => OrganizationVendorUpdateInput)
  @Field(() => OrganizationVendorUpdateInput, { nullable: false })
  data!: OrganizationVendorUpdateInput;
}

export { UpdateOrganizationVendorArgs as UpdateOrganizationVendorArgs };
