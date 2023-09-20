import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  BooleanInput,
  SelectInput,
  DateTimeInput,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TenantTitle } from "../tenant/TenantTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { EquipmentTitle } from "../equipment/EquipmentTitle";
import { IssueTypeTitle } from "../issueType/IssueTypeTitle";
import { MerchantTitle } from "../merchant/MerchantTitle";
import { OrganizationContactTitle } from "../organizationContact/OrganizationContactTitle";
import { OrganizationDocumentTitle } from "../organizationDocument/OrganizationDocumentTitle";
import { OrganizationProjectTitle } from "../organizationProject/OrganizationProjectTitle";
import { OrganizationTeamTitle } from "../organizationTeam/OrganizationTeamTitle";
import { ProductTitle } from "../product/ProductTitle";
import { ProductCategoryTitle } from "../productCategory/ProductCategoryTitle";
import { ProductGalleryItemTitle } from "../productGalleryItem/ProductGalleryItemTitle";
import { ProductVariantTitle } from "../productVariant/ProductVariantTitle";
import { TimeOffRequestTitle } from "../timeOffRequest/TimeOffRequestTitle";
import { UserTitle } from "../user/UserTitle";
import { WarehouseTitle } from "../warehouse/WarehouseTitle";

export const ImageAssetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Url" source="url" />
        <NumberInput step={1} label="Width" source="width" />
        <NumberInput step={1} label="Height" source="height" />
        <BooleanInput label="Is Featured" source="isFeatured" />
        <TextInput label="Thumb" source="thumb" />
        <NumberInput label="Size" source="size" />
        <TextInput label="External Provider Id" source="externalProviderId" />
        <SelectInput
          source="storageProvider"
          label="Storage Provider"
          choices={[
            { label: "LOCAL", value: "LOCAL" },
            { label: "S3", value: "S3" },
            { label: "WASABI", value: "WASABI" },
            { label: "CLOUDINARY", value: "CLOUDINARY" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <ReferenceInput
          source="tenantImageAssetTenantIdTotenant.id"
          reference="Tenant"
          label="Tenant Image Asset Tenant Id Totenant"
        >
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organizationImageAssetOrganizationIdToorganization.id"
          reference="Organization"
          label="Organization Image Asset Organization Id Toorganization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="organizationOrganizationImageIdToimageAsset"
          reference="Organization"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tenantTenantImageIdToimageAsset"
          reference="Tenant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TenantTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="equipment"
          reference="Equipment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EquipmentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="issueType"
          reference="IssueType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={IssueTypeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="merchant"
          reference="Merchant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MerchantTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="organizationContact"
          reference="OrganizationContact"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationContactTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="organizationDocument"
          reference="OrganizationDocument"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationDocumentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="organizationProject"
          reference="OrganizationProject"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationProjectTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="organizationTeam"
          reference="OrganizationTeam"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationTeamTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="product"
          reference="Product"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productCategory"
          reference="ProductCategory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductCategoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productGalleryItem"
          reference="ProductGalleryItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductGalleryItemTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productVariant"
          reference="ProductVariant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductVariantTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="timeOffRequest"
          reference="TimeOffRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TimeOffRequestTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="user"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="warehouse"
          reference="Warehouse"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WarehouseTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
