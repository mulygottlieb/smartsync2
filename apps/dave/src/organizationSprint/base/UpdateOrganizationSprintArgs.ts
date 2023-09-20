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
import { OrganizationSprintWhereUniqueInput } from "./OrganizationSprintWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { OrganizationSprintUpdateInput } from "./OrganizationSprintUpdateInput";

@ArgsType()
class UpdateOrganizationSprintArgs {
  @ApiProperty({
    required: true,
    type: () => OrganizationSprintWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationSprintWhereUniqueInput)
  @Field(() => OrganizationSprintWhereUniqueInput, { nullable: false })
  where!: OrganizationSprintWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => OrganizationSprintUpdateInput,
  })
  @ValidateNested()
  @Type(() => OrganizationSprintUpdateInput)
  @Field(() => OrganizationSprintUpdateInput, { nullable: false })
  data!: OrganizationSprintUpdateInput;
}

export { UpdateOrganizationSprintArgs as UpdateOrganizationSprintArgs };
