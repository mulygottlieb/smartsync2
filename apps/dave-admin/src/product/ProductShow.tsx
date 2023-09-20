import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ORGANIZATIONPROJECT_TITLE_FIELD } from "../organizationProject/OrganizationProjectTitle";
import { INVOICE_TITLE_FIELD } from "../invoice/InvoiceTitle";
import { TASK_TITLE_FIELD } from "../task/TaskTitle";
import { EXPENSE_TITLE_FIELD } from "../expense/ExpenseTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { PRODUCT_TITLE_FIELD } from "./ProductTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { IMAGEASSET_TITLE_FIELD } from "../imageAsset/ImageAssetTitle";
import { PRODUCTVARIANTPRICE_TITLE_FIELD } from "../productVariantPrice/ProductVariantPriceTitle";
import { PRODUCTVARIANTSETTING_TITLE_FIELD } from "../productVariantSetting/ProductVariantSettingTitle";
import { TAG_TITLE_FIELD } from "../tag/TagTitle";
import { WAREHOUSE_TITLE_FIELD } from "../warehouse/WarehouseTitle";
import { PRODUCTTYPE_TITLE_FIELD } from "../productType/ProductTypeTitle";
import { PRODUCTCATEGORY_TITLE_FIELD } from "../productCategory/ProductCategoryTitle";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="Enabled" source="enabled" />
        <TextField label="Code" source="code" />
        <TextField label="Image Url" source="imageUrl" />
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Organization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Product Type"
          source="producttype.id"
          reference="ProductType"
        >
          <TextField source={PRODUCTTYPE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Image Asset"
          source="imageasset.id"
          reference="ImageAsset"
        >
          <TextField source={IMAGEASSET_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Product Category"
          source="productcategory.id"
          reference="ProductCategory"
        >
          <TextField source={PRODUCTCATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="InvoiceItem"
          target="productId"
          label="InvoiceItems"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Description" source="description" />
            <TextField label="Price" source="price" />
            <TextField label="Quantity" source="quantity" />
            <TextField label="Total Value" source="totalValue" />
            <BooleanField label="Apply Tax" source="applyTax" />
            <BooleanField label="Apply Discount" source="applyDiscount" />
            <ReferenceField
              label="Organization Project"
              source="organizationproject.id"
              reference="OrganizationProject"
            >
              <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Invoice"
              source="invoice.id"
              reference="Invoice"
            >
              <TextField source={INVOICE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Task" source="task.id" reference="Task">
              <TextField source={TASK_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Expense"
              source="expense.id"
              reference="Expense"
            >
              <TextField source={EXPENSE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ProductGalleryItem"
          target="productId"
          label="ProductGalleryItems"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Image Asset"
              source="imageasset.id"
              reference="ImageAsset"
            >
              <TextField source={IMAGEASSET_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ProductOptionGroup"
          target="productId"
          label="ProductOptionGroups"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ProductTranslation"
          target="referenceId"
          label="ProductTranslations"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Description" source="description" />
            <TextField label="Language Code" source="languageCode" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ProductVariant"
          target="productId"
          label="ProductVariants"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Taxes" source="taxes" />
            <TextField label="Notes" source="notes" />
            <TextField label="Quantity" source="quantity" />
            <TextField
              label="Billing Invoicing Policy"
              source="billingInvoicingPolicy"
            />
            <TextField label="Internal Reference" source="internalReference" />
            <BooleanField label="Enabled" source="enabled" />
            <ReferenceField
              label="Product Variant Price Product Variant Price Id Toproduct Variant Price"
              source="productvariantprice.id"
              reference="ProductVariantPrice"
            >
              <TextField source={PRODUCTVARIANTPRICE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product Variant Setting Product Variant Setting Id Toproduct Variant Setting"
              source="productvariantsetting.id"
              reference="ProductVariantSetting"
            >
              <TextField source={PRODUCTVARIANTSETTING_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Image Asset"
              source="imageasset.id"
              reference="ImageAsset"
            >
              <TextField source={IMAGEASSET_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product Variant Price Product Variant Price Product Variant Id Toproduct Variant"
              source="productvariantprice.id"
              reference="ProductVariantPrice"
            >
              <TextField source={PRODUCTVARIANTPRICE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product Variant Setting Product Variant Setting Product Variant Id Toproduct Variant"
              source="productvariantsetting.id"
              reference="ProductVariantSetting"
            >
              <TextField source={PRODUCTVARIANTSETTING_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TagProduct"
          target="productId"
          label="TagProducts"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WarehouseProduct"
          target="productId"
          label="WarehouseProducts"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Quantity" source="quantity" />
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Warehouse"
              source="warehouse.id"
              reference="Warehouse"
            >
              <TextField source={WAREHOUSE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
