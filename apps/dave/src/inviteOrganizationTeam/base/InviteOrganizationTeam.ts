/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Invite } from "../../invite/base/Invite";
import { ValidateNested, IsString } from "class-validator";
import { Type } from "class-transformer";
import { OrganizationTeam } from "../../organizationTeam/base/OrganizationTeam";

@ObjectType()
class InviteOrganizationTeam {
  @ApiProperty({
    required: true,
    type: () => Invite,
  })
  @ValidateNested()
  @Type(() => Invite)
  invite?: Invite;

  @ApiProperty({
    required: true,
    type: () => OrganizationTeam,
  })
  @ValidateNested()
  @Type(() => OrganizationTeam)
  organizationTeam?: OrganizationTeam;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;
}

export { InviteOrganizationTeam as InviteOrganizationTeam };
