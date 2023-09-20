/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { InviteWhereUniqueInput } from "../../invite/base/InviteWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { OrganizationProjectWhereUniqueInput } from "../../organizationProject/base/OrganizationProjectWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class InviteOrganizationProjectWhereInput {
  @ApiProperty({
    required: false,
    type: () => InviteWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InviteWhereUniqueInput)
  @IsOptional()
  @Field(() => InviteWhereUniqueInput, {
    nullable: true,
  })
  invite?: InviteWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => OrganizationProjectWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationProjectWhereUniqueInput)
  @IsOptional()
  @Field(() => OrganizationProjectWhereUniqueInput, {
    nullable: true,
  })
  organizationProject?: OrganizationProjectWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;
}

export { InviteOrganizationProjectWhereInput as InviteOrganizationProjectWhereInput };
