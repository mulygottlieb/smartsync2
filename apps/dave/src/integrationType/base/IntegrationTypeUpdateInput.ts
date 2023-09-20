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
import { IsString, IsOptional, IsInt, ValidateNested } from "class-validator";
import { IntegrationIntegrationTypeUpdateManyWithoutIntegrationTypesInput } from "./IntegrationIntegrationTypeUpdateManyWithoutIntegrationTypesInput";
import { Type } from "class-transformer";

@InputType()
class IntegrationTypeUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  groupName?: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  order?: number;

  @ApiProperty({
    required: false,
    type: () =>
      IntegrationIntegrationTypeUpdateManyWithoutIntegrationTypesInput,
  })
  @ValidateNested()
  @Type(() => IntegrationIntegrationTypeUpdateManyWithoutIntegrationTypesInput)
  @IsOptional()
  @Field(
    () => IntegrationIntegrationTypeUpdateManyWithoutIntegrationTypesInput,
    {
      nullable: true,
    }
  )
  integrationIntegrationType?: IntegrationIntegrationTypeUpdateManyWithoutIntegrationTypesInput;
}

export { IntegrationTypeUpdateInput as IntegrationTypeUpdateInput };
