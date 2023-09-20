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
import { IntegrationWhereUniqueInput } from "../../integration/base/IntegrationWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { IntegrationTypeWhereUniqueInput } from "../../integrationType/base/IntegrationTypeWhereUniqueInput";

@InputType()
class IntegrationIntegrationTypeUpdateInput {
  @ApiProperty({
    required: false,
    type: () => IntegrationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => IntegrationWhereUniqueInput)
  @IsOptional()
  @Field(() => IntegrationWhereUniqueInput, {
    nullable: true,
  })
  integration?: IntegrationWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => IntegrationTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => IntegrationTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => IntegrationTypeWhereUniqueInput, {
    nullable: true,
  })
  integrationType?: IntegrationTypeWhereUniqueInput;
}

export { IntegrationIntegrationTypeUpdateInput as IntegrationIntegrationTypeUpdateInput };