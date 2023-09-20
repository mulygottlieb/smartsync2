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
import { OrganizationTeamWhereUniqueInput } from "../../organizationTeam/base/OrganizationTeamWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EquipmentSharingWhereUniqueInput } from "../../equipmentSharing/base/EquipmentSharingWhereUniqueInput";

@InputType()
class EquipmentSharesTeamCreateInput {
  @ApiProperty({
    required: true,
    type: () => OrganizationTeamWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationTeamWhereUniqueInput)
  @Field(() => OrganizationTeamWhereUniqueInput)
  organizationTeam!: OrganizationTeamWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => EquipmentSharingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EquipmentSharingWhereUniqueInput)
  @Field(() => EquipmentSharingWhereUniqueInput)
  equipmentSharing!: EquipmentSharingWhereUniqueInput;
}

export { EquipmentSharesTeamCreateInput as EquipmentSharesTeamCreateInput };
