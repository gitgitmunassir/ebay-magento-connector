# Shipping Information On Exported Products

As the product gets exported to the eBay end, the following shipping information also gets exported to eBay along with the product.

Some of the following details that get exported are mentioned below like:-

- Shipping & Handling charges,
- Shipping service,
- Custom shipping duration for minimum and maximum limits can be set in the number of days by the admin,
- Additional Shipping Amount if the customer purchases additional quantities.

#### **Product-Level eBay Shipping Cost**

When a product is imported from or exported to eBay, the module syncs the product-level shipping charge to the **eBay Shipping Details** attribute group on the Magento product edit form.

<img src="/images/EbayProductShipping/ShippingFieldAtProductForm.png" alt="eBay Shipping Cost on Product Form" />

***Fields-***

- **eBay Shipping Cost** – Set or review the flat shipping charge for the product. This value is exported to eBay as Shipping & Handling charges and is used on the Magento storefront when the **eBay Product Shipping** carrier is enabled.

#### **eBay Product Shipping at Storefront**

Enable the carrier under **Stores > Configuration > Sales > Delivery Methods > eBay Product Shipping**. At checkout, shipping rates are calculated from each product's **eBay Shipping Cost** attribute.

<img src="/images/EbayProductShipping/EbayProductShipping.png" alt="eBay Product Shipping on Shopping Cart" />

- **Shopping Cart** – When estimating shipping and tax, **eBay Product Shipping - eBay Shipping** appears as a shipping method with the product-level shipping cost applied.

<img src="/images/EbayProductShipping/CheckoutIWithShipping.png" alt="eBay Product Shipping at Checkout" />

- **Checkout** – On the Review & Payments step, the selected **eBay Product Shipping** method and its cost are displayed in the order summary along with the cart subtotal and order total.

<img src="/images/EbayProductShipping/AdminOrderDetailPage.png" alt="eBay Shipping on Admin Order Detail Page" />

- **Admin Order** – After the order is placed, the **Shipping & Handling Information** section on the admin order view shows **eBay Product Shipping - eBay Shipping** with the synced shipping cost.

#### **eBay Product Shipping Carrier Configuration**

Configure under **Stores > Configuration > Sales > Delivery Methods > eBay Product Shipping**:

***Fields-***

- **Enabled** – Enable or disable the eBay Product Shipping carrier on the storefront.
- **Title** – The carrier title shown at checkout (default: eBay Product Shipping).
- **Method Name** – The shipping method label shown at checkout (default: eBay Shipping).
- **Ship to Applicable Countries** – Restrict this shipping method to all allowed countries or specific countries only.
- **Ship to Specific Countries** – Select destination countries when shipping is limited to specific regions.
- **Sort Order** – Controls the display order of this carrier relative to other shipping methods.
- **Displayed Error Message** – Message shown when the shipping method is unavailable for the selected address.

**Note**:- When products are imported from eBay, shipping details such as shipping service, handling charges, delivery duration (minimum and maximum days), and additional shipping amount per quantity are saved on the product. The **eBay Shipping Cost** attribute and **eBay Product Shipping** carrier apply that cost at Magento checkout for eBay-imported products.

However, only the standard available shipping methods available at the Magento store are visible to the customer during the checkout process, along with **eBay Product Shipping** when enabled.

#### Package Information

![Configuration_Settings_Stores_Magento_Admin-2-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/Configuration_Settings_Stores_Magento_Admin-2-1.png)

***Package Information Fields- ***

- Shipping Package Type: The admin may select any of the given options- Package/thick envelope, large envelope, Letter, or Large Package, whichever is feasible.
- Irregular Package: Can be chosen as Yes or No. This field shall notify the carrier that this package requires special handling.
- Measurement Unit: The admin can select either of the two-unit types to measure weight and dimensions- English System of Measurement, or Metric System of Measurement.

#### **Order Sync Option**[!\[eBay Connector for Magento2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/03/webkul-magento2-ebay-connector-order-sync.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/03/webkul-magento2-ebay-connector-order-sync.png)

**Order Sync Option Fields:**

- Default store view for order sync – Select the default store view for order sync.
- eBay Imported Order Status – Set default order status for the order which imported from eBay.
- Default Product Quantity – Set default product quantity for a product which exported to eBay if product quantity is zero in the store.
- eBay Import Order: Select the order status from the given list. The orders bearing the selected status shall be imported from eBay.

#### **Default Setting For eBay Product Import**

![Configuration_Settings_Stores_Magento_Admin-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/Configuration_Settings_Stores_Magento_Admin-2.png)

![magento2 ebay connector aria2c configuration](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/09/webkul-magento2-ebay-connector-aria2c-config.webp)

<img src="/images/EbayAddedConfigurations/ProductOutOfStockAndPriceFilter.png" alt="Product Out-of-Stock and Price Range Filter" />

***Fields-***

- Product import limitation according to mapped categories– You can select the import limitation into Yes/no for mapped categories.
- Default Website- The selected website under Default Website will be assigned to all eBay products by default.
- Default Source-  You can select Default Source or Not Assigned, selected Source will be assigned to all eBay products by default.
- Product Description with HTML- Product import in-store with HTML description content.
- Default Tax Class- Select the tax class from the dropdown which will then be assigned to all eBay products by default.
- Enable Message Queue- If set to Yes, then the event notification will work with message queue and product images will be imported with the help of message queue.
- Product Import with Images- The product images will be imported along with products if this option is set to Yes.
- Import Out-of-Stock Products – If enabled, out-of-stock eBay products will also be imported/exported. When set to No, out-of-stock products are excluded from both import and export.
- Product Price Range From – Import/export only products with price greater than or equal to this value.
- Product Price Range To – Import/export only products with price less than or equal to this value. Together with the From value, this defines the price range filter for product import and export.
- Enable aria2c tool for downloading product images- Enable or disable the aria2c tool.
aria2c -d var/import/images/productimages -i var/import/catalog_product_images_aria2c.txt --allow-overwrite=true

#### **Automatic Product Export To eBay**

<img src="/images/EbayAddedConfigurations/AutoExportSettings.png" alt="Automatic Product Export To eBay" />

***Fields-***

- Enable Auto Export – When enabled, products from mapped categories will be automatically exported to eBay via cron and message queue.
- Max Products Per Cron Run – Maximum number of products to publish to queue in a single cron execution.
- Dry Run Mode – If enabled, products will only be logged but not actually exported to eBay. Use this to verify which products would be exported.
- Use Bulk Feed API – When enabled, products are exported in bulk via the eBay Sell Feed API (LMS_ADD_FIXED_PRICE_ITEM) instead of the single-product message queue. The single-product queue cron will not run when this is active.
- Bulk Feed Batch Size – Number of products per Feed API upload file. eBay recommends max 10,000 per file.
- Feed Schema Version – The eBay schema version for the feed (e.g. 1155). Changing this may affect XML structure.

#### Default Business Policy

[!\[eBay Connector for Magento2_default business policy\](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/03/webkul-magento2-ebay-connector-default-business-policy.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/03/webkul-magento2-ebay-connector-default-business-policy.png)

##### ***Fields-***

- Business Profile Enabled on eBay: Choose Yes or No so as to display or not display business profile on eBay.
- eBay Marketplace: Choose the eBay marketplace from the given list of options.
- Payment Policy: Retrieved from eBay after signing in using the selected eBay Marketplace.
- Shipping Policy: Retrieved from eBay after signing in using the selected eBay Marketplace.
- Return Policy: Retrieved from eBay after signing in using the selected eBay Marketplace.

The **eBay Magento Connect **includes the following Dashboard Options once the admin successfully installs the eBay Connector for the Magento2 module. The admin can ** Map:**

- Category
- Category Automation
- Map Product
- eBay Order
- Export Queue Log
- Bulk Export Tasks
- Listing Templates
- Price Rules
- Real-Time Missed Orders, and
- Configuration

<img src="/images/EbayMagentoConnectorMenu.png" alt="navigation_eBay Connector for Magento2" />
