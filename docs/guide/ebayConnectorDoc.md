# eBay Connector for Magento 2 (Adobe Commerce)

Updated 4 June 2026

[Live Demo](https://magento2demo.webkul.in/ebayconnector/?demo=Webkul_Ebaymagentoconnect)

[eBay Connector for Magento 2](https://store.webkul.com/magento2-ebay-connector.html) (Adobe Commerce) allows you to integrate the Magento 2 store with the eBay store. Import products, categories, and orders from eBay to Magento 2.

The admin can also export the product from the Magento 2 (Adobe Commerce) store to eBay.

Hence the admin can provide eBay specifications, variations, refund policy, shipping details for export products.

Check a brief overview of the plugin’s initial configuration settings –

6gV0ll1amrY

Check a brief overview of the plugin’s management options available to the admin –

RyvEobbc5EM

### Features Of eBay Connector for Magento 2 (Adobe Commerce)

- Import eBay products, orders and map categories in Magento. However, the admin can select only active products to import from eBay.
- Export products from Magento to the eBay store.
- Import Simple as well as Configurable product types.
- Export Simple, Configurable, Bundle and Group product types
- Admin can select product types that will export from eBay.
- Do product synchronization with eBay condition, specifications, and variations.
- Real-time order and inventory (as per admin panel settings)sync based on eBay webhooks.
- Auto-update shipping and tracking information on eBay in real time.
- Sandbox mode is available for testing and development.
- Revise eBay import product details from Magento.
- Configure return policy details for export products.
- Set the export product listing duration.
- Admin can create the listing templates.
- Set default sync category, order status, and quantity.
- Mention shipping details for export products.
- Import eBay products according to end listing date range.
- Product export to eBay with the listing template.
- Product export to eBay with eBay store category according to mapping.
- Option in configuration to select gallery type to export product listing on eBay.
- Magento 2 ebay integration module supports package dimensions attribute mapping.
- Export products to eBay using the SKU filter.
- At the time of export the custom options in a product are eBay Variation.
- Select the default store view and default website.
- Supports multiple language translations.
- The module source code is open for customization.
- Admin can set price rules for the import/export products of eBay from Magento.
- Aria2c Tool implemented for downloading product images on server.
- Implemented Magento CSV Model For Product Import for faster products import.

<!-- Newly Added Features -->
- Automatic Weight Unit Conversion During Sync
- Import Filter for Out-of-Stock Products
- Syncs shipping costs between eBay and Magento 2 at the product level.
- Supports a dedicated custom field for eBay-specific product titles during export.
- Price-Based Product Export Filter — Exports only products whose price meets or exceeds a configured minimum value.
- Automatic Product Export to eBay — Auto-exports products to eBay once category mapping and required attributes are configured, eliminating manual export steps.
- Product-Level Shipping Cost Sync (eBay → Magento 2) — Imports eBay product-level shipping charges into Magento 2 to apply consistent shipping rates across both platforms.
- SKU to eBay MPN Mapping — Automatically maps Magento 2 SKU to the eBay MPN attribute during import, export, and sync.
- Automatic Brand Attribute Mapping (Magento 2 → eBay) — Auto-maps the Magento 2 Brand attribute to the eBay Brand attribute during export and real-time sync.
- Import Product Dimensions and Weight from eBay — Imports and syncs product dimensions and weight from eBay to Magento 2, enabling accurate shipping calculations.
- eBay-Specific Product Images for Export — Enables exporting separate, eBay-specific product images instead of default store images.
- Automatic Category Creation During Import — Auto-creates Magento 2 categories based on the eBay category hierarchy during import, preserving the parent-child structure and assigning products accordingly.
- Automatic Category Mapping Based on Identical Category Structure — Automatically maps matching eBay and Magento 2 categories when their hierarchy and names are identical, removing the need for manual mapping.
- Manual Product Import via eBay Item SKU — Allows merchants to import specific eBay products directly using their eBay Item SKU

### Installation Of eBay Connector for Magento 2

Customers will get a **zip folder** and they have to extract the contents of this zip folder on their system. Thus, the extracted folder has an ** src** folder, inside the src folder you have the **app** folder.

You need to transfer this **app** folder into the Magento2 root directory on the server as shown below.

![magento2-folder-structure](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/09/magento2-folder-structure.webp)

If you download the module from Magento Connect then unzip the respective extension zip.

Henceforth create **Webkul**(vendor) then **Ebaymagentoconnect**(module) name folder inside your magento2 root directory as:

**app/code/Webkul/Ebaymagentoconnect** and then move all module’s files inside **/app/code/Webkul/Ebaymagentoconnect/** folder in magento2 root directory.

![ebay-magento-connector-folder-structure](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/09/ebay-magento-connector-folder-structure.webp)

After the upload, you can see the folders in your Magento2 Root Directory.

![ebay-magento-connector-folder-struscture](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/09/ebay-magento-connector-folder-struscture.webp)

Hereafter the successful installation, you have to run these commands in the Magento2 root directory.

```
composer require webkul/ebayconnector
```

```
php bin/magento setup:upgrade
```

```
php bin/magento setup:di:compile
```

```
php bin/magento setup:static-content:deploy
```

```
php bin/magento indexer:reindex
```

```
php bin/magento cache:flush
```

**Note- “composer require webkul/ebayconnector”** this command is necessary to run in the terminal for the proper installation of the module.

### Multilingual Support

For **multilingual **support, the admin will navigate through **Store->Configuration->General ->Locale Options.**

Hence, select the locale as German (the language into which the admin wants to translate his store content).

![magento2-german-admin-configuration-locale](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/10/magento2-german-admin-configuration-locale.webp)

### Translation Of eBay Connector for Magento 2

If a user wants to translate their module from English to German. Henceforth, they need to follow the path **app/code/Webkul/Ebaymagentoconnect/i18n** in their unzip Magento2 Ebaymagentoconnect folder.

The user receives a CSV file with the name “en_US.csv”. Now they will rename that CSV as “de_DE.csv”.

Then translate all right side content after the comma in the German language.

After editing the CSV, save it and then upload it to the path **app/code/Webkul/Ebaymagentoconnect/i18n** where the Magento2 on the server installation took place.

So, the module will translate into the German Language. However, it supports both **RTL **and **LTR **languages.

![ebay-magento-connector-multi-language-csv](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/09/ebay-magento-connector-multi-language-csv.webp)

![multi-language-csv](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/09/multi-language-csv.webp)

Thus, the user can edit the CSV like the image below.  
[!\[eBay Connector for Magento2 image\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/Screenshot-from-2018-04-23-17-33-44.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/Screenshot-from-2018-04-23-17-33-44.png)

### eBay Connector for Magento2 Configuration

### How to get eBay Connector credentials?

After the successful installation of Magento 2 ebay integration module, one will need to fill in the eBay developer keys **(app id, cert id, dev id, user id, auth token**).

Thus, the eBay account has these credentials.

However, if the user doesn’t have an account, then the user will have to create an account and get the required keys.

#### **First Step**

To create a new account go to [**developer.ebay.com**](https://developer.ebay.com) and click on the **sign-in/Join link**.

[!\[Sign-Up\](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/Sign-Up.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/Sign-Up.png)

#### **Second Step**

Now, create a **username** and **password** for your account and then click the **join** button.  
[!\[Register- eBay Connector for Magento2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/Register.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/Register.png)

#### Third Step

After the above step, you need to create an app. Enter the **app name** and choose the **environment** to generate your **key set**.

So, keep a note that when you generate the keys set then only the app saves.

[!\[eBay Connector for Magento 2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/App-name.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/App-name.pnge)

#### **Fourth Step**

So, after clicking on the **Create a Keyset** link(for the environment you choose), you need to confirm the primary contact for this account first.

Henceforth you can click the **Continue to Create Keys** button.  
[!\[confirm-primary-Account eBay Connector for Magento2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/confirm-primary-Account-1.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/confirm-primary-Account-1.png)

#### Fifth Step

Now you can see the environment key that you select. Thus, for creating the production keys just click on the “**Create a Key Set**” and you will get your production keys.  
[!\[Sandbox-keys-eBay Connector for Magento2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/Sandbox-keys.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/Sandbox-keys.png)

#### **Sixth Step**

Thus, for generating the **User Token** go to your **Application keys page**. Hence, in the **App ID** row of the Sandbox keyset, click the **User Tokens** to access the Tokens page for your Sandbox keyset.  
[!\[image\](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/Sandbox-keys-1.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/Sandbox-keys-1.png)

#### Seventh ** Step**

After you click on **“User Tokens”** in the snapshot above, you will see a “**Sign in to Sandbox**” button. Hence, click it to access the sandbox account.  
[!\[image\](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/Sign-In-Sandbox.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/Sign-In-Sandbox.png)

So, from here, the user can even get an ‘**eBay Oauth Key**‘ which they can add to **Default Business Policy**.

![User-Tokens-eBay-Sign-In-eBay-1-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/User-Tokens-eBay-Sign-In-eBay-1-1.png)

Here, the ‘*sjohn_smith-johnsmit-john-laitazrqx*‘ is the RuName of the application that will be part of the admin configuration.

Additionally, the Your privacy policy URL, auth accepted URL and auth declined URL- will have the frontend URL of the website.

**Your auth accepted URL:** This field is the most important. It should be set as shown below-

https://**domainname**/ebaymagentoconnect/index/fetchtoken

#### **Eighth** Step

Now, enter your Sandbox **Username** and **Password**.  
[!\[image\](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/login-sandbox.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/login-sandbox.png)

#### Ninth Step

Hence, after clicking the “**Sign in**” button, you will see another page where you have to click the “**Agree**” button.

[!\[image\](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/Agree.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/Agree.png)

#### Tenth Step

Lastly, you will redirect back and will get the **App Token**.  
[!\[App-Token-eBay Connector for Magento2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/App-Token.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/App-Token.png)

### eBay Magento Connect Configuration

Now you can proceed to the admin configuration part where you need to fill in the configuration details.

The admin shall navigate through **Store > Configuration > eBay Magento Connect** in the admin panel and set the configurations for Magento 2 eBay Connector.

Thus, the admin will configure the settings for the following configuration sections:

- General Settings
- Real-Time Information Update
- Store Settings
- Return Policy
- Listing Options
- Dispatch Options
- Payment Options
- Package Information
- Order Sync Option
- Default Settings for eBay Product Import
- Automatic Product Export To eBay
- Default business Policy

**General Settings**

![Configuration-Settings-Stores-Magento-Admin-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/Configuration-Settings-Stores-Magento-Admin-2.png)

***Fields***

- Attribute Set ID – Select the default attribute to synchronize products.
- Global Sites – Select your eBay store according to the region or country.
- eBay-
  - User Id – Enter the eBay login user name here.
  - Authentication Token – Enter the eBay user token which gets creates.
  - Developer Token – Enter Dev ID here.
  - Application Id – Enter App ID here.
  - Certification Id – Enter Cert ID here.
- Application RuName – It is retrieved from the Get a Token from eBay via Your Application in eBay account.
- Mode – Two modes are available, Sandbox mode is for testing purposes and Production mode for the live purpose.
- Item Country – Select the country for products.
- Item Location –  Enter the location of your product.
- Shop’s Postal Code – Enter your eBay store zip code.

#### **Real-Time**** Information Update**![real-time](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/real-time.png)

***Real-Time Information Update Fields***

**Subscribe eBay Events**

- The admin can select which eBay Event can be synced from eBay to Magento2.
- That is an event among items sold, created, revised, close, and fix price transactions that will take place on eBay and will sync and reflect on the Magento2 store.

**Sold Item Action-** The admin can select Order Creation and Inventory Management or only Inventory Management as the action that will take place on the Magento2 store when an item is sold on eBay.

- Order Creation and Inventory Management- This will create an order and deduct the quantity in the inventory as the item is sold on the eBay store.
- Only Inventory Management- This will only deduct the quantity in the inventory on the Magento2 store as the item on the eBay store.

#### **Store Settings**[!\[image\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/Configuration-Settings-Stores-Magento-Admin-1.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/Configuration-Settings-Stores-Magento-Admin-1.png)

***Store Settings Fields***

- Revise eBay item automatically on eBay Store – Select ‘Yes’ in order to revise eBay item, automatically, whenever an item gets an update on the Magento store, else select ‘No’ option.
- eBay item import with specification – Here admin can select either All or Required. If the admin selects ‘All’ then it will import all the eBay product specifications.
  - Otherwise, if the admin chooses ‘Required’ then it will import only require specifications (that is, the fields marked as required) on eBay to the Magento store.

#### **Returns Policy**

#### [!\[magento2 ebay connector\](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/03/webkul-magento2-ebay-connector-return-policy.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/03/webkul-magento2-ebay-connector-return-policy.png)

***Return Policy Fields***

- 
  - Define Return Policy – Select Returns Accepted or Not Accepted from the dropdown list. This option is for the product which is exported.
  - Returns within – Select the return duration for the exported products such as 14, 30 or 60 days.
  - Return Shipping Pay By – Chose from the list whether Seller or Buyer shall be paying for the product returned.
  - Refund Option – Choose either Money Back or Money Back or Replacement from the given list as a Refund Option.
  - Other Information – Write any additional information about Return Policy for the exported products.

#### **Listing Options**

##### ![listing-options](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/listing-options.png)

- Listing Duration – Select Good Till Canceled, 1, 3, 5, 7, 10 or 30 days. It is the duration of exported products on eBay.
- Gallery Type – Admin can select the Gallery type as – Normal or Plus. If chosen Plus for Gallery type, a listing is highlighted with a large gallery photo on the search results page.
  - However, if Normal is chosen for gallery type, the gallery image of the listing is included in the search results page and is free of cost.

![listing_options_gallerytype](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/listing_options_gallerytype.png)

- 
  - If Normal is selected, then the product while being exported will not have this option (as shown in the above image) checked. Else if Plus is selected then the option will be auto-selected while exporting the product to eBay.
- Use Templates For Listing – The admin can select “yes” to enable the template listing to export the product’s additional information along with the product. Else select “no” to disable template listing.
- Select Template – The admin can select the template. As per the selected template, the additional information will get exported along with the product.
- eBay Price Rule Applicable For–The admin can choose to apply price rule on import product, export product or go with none option to remain the price rule unapplied.
- Product Type For Export- The admin can select from here the type of product that will be exported to eBay.
- Add SubTitle on eBay Product: Either Yes or No can be chosen for this field. It simplifies the search as it shall appear as a keyword to the buyers when they are searching for a product.

#### **Dispatch Options:**

The admin will have to set the configurations for the Dispatch Time field under dispatch options.

Against the Dispatch Time field, the admin needs to select the dispatch time for exported products on eBay such as 1, 2, 3, 4 days.

![image](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/module-configuration-dispatch.png)

#### **Payment Options**[!\[payment_option-eBay Connector for Magento2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/Configuration-Settings-Stores-Magento-Adminpayment.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/Configuration-Settings-Stores-Magento-Adminpayment.png)*** Fields-***

- Paypal Email Address – Enter your PayPal email ID.
- Default Category – When the eBay category is not mapped with Magento then products will assign to this category.
- Store Currency –  Select your eBay store currency.

- 

### Shipping Information On Exported Products

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

### Map Category- eBay Connector for Magento2

After importing all the eBay categories you need to map them to store categories.

At the time of mapping, eBay Condition, and Specification will be created as product attributes and eBay variations will be created as Super Attributes (used for configurable products) in Magento 2.

The admin can map category, under the **eBay Magento Connector > Map Category** option like the image below.

![Mapped-Categories-List-eBay-Magento-Connect-Magento-Admin-3](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/Mapped-Categories-List-eBay-Magento-Connect-Magento-Admin-3.png)

View mapped categories with EAN, UPC, and eBay Store Category. Admin clicks “Map Category” to open a new page. Only one sub-category can be mapped at a time; parent categories aren’t allowed.

[!\[image\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/Category-Mapping.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/Category-Mapping.png)

**Note:**  If the admin has created any store on the eBay then, an additional field **“eBay Store Category”** will be visible. Thus, for that store, you might have created certain custom categories also.

This **“eBay Store Category”** field will display those custom categories for mapping.

[!\[mapping\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/Map-Category.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/Map-Category.png)

### Category Automation - eBay Connector for Magento2

The **Category Automation** feature under **eBay Magento Connect > Category Automation** lets the admin fetch real-time eBay categories and automatically create the matching Magento category hierarchy, then map selected leaf categories to eBay without manual one-by-one mapping.

<img src="/images/CategoriesUpdatedFeature/CategoryAutomation.png" alt="eBay Category Automation" />

***Search Filters Fields-***

- **eBay Parent Category** – Filter the category list by a specific eBay parent category, or choose **All Categories** to browse the full taxonomy.
- **Mode** – Choose **Create + Auto Map** to create Magento categories and map them to eBay in one step, or **Create Only** to create categories without creating the eBay mapping.
- **Attribute Set** – Select the attribute set assigned to categories created during automation (defaults to the module's configured attribute set).
- **Overwrite Existing Mapping** – When checked, replaces any existing eBay-to-Magento category mapping for the selected categories.
- **Load Real-Time eBay Categories** – Fetches the latest category list directly from the eBay API based on the selected filters.
- **Run for Selected Categories** – Executes automation for the leaf categories selected in the table below.

Use the search bar to filter by **Category ID / Name / Path**, then select one or more **leaf** categories (only leaf rows are selectable) from the grid columns **eBay Category ID**, **Name**, **Path**, and **Leaf**.

<img src="/images/CategoriesUpdatedFeature/CategoryAutomationListing.png" alt="eBay Category Automation Listing" />

After loading categories, the admin can filter by parent category (for example, **Dolls & Bears**), review the full category path for each row, and select the leaf categories to automate. Pagination and rows-per-page controls help navigate large category trees.

<img src="/images/CategoriesUpdatedFeature/CategoryAutomationMappingAndCreation.png" alt="eBay Category Automation Results" />

When automation completes, a summary popup displays the results:

- **Created** – Number of new Magento categories created from the eBay hierarchy.
- **Reused** – Number of existing Magento categories reused when the same name already exists under the parent.
- **Mapped** – Number of eBay categories successfully mapped to Magento categories.
- **Skipped** – Number of categories skipped (for example, when metadata is unavailable).
- **Conflicts** – Number of mapping conflicts encountered during the run.

**Note:** Only **leaf** eBay categories can be selected for automation, since product listings are assigned to terminal categories in the eBay taxonomy.

### Map Product

The admin can synchronize its products on both the stores with the help of this eBay connector extension.

Admin can import products from ebay to Magento 2 and from Magento 2 to ebay.

So, given below are the steps for Product Mapping.

### 1. Import Product from eBay

Navigate to **eBay Magento Connect > Map Product**. From the **Sync From eBay** dropdown, select **Import Product From eBay** to fetch product data from eBay and store it in the Magento database.

<img src="/images/ProductImportUpdatedFeature/ProductImportOptions.png" alt="Map Product Sync From eBay Options" />

The **Sync From eBay** menu provides the following product sync actions:

- Import Product From eBay
- Run eBay Product Profiler
- Run eBay Product Image Profiler
- Export To eBay
- Migrate Listing By ID

After clicking **Import Product From eBay**, the following pop-up window will appear.

<img src="/images/ProductImportUpdatedFeature/ImportProductPopup.png" alt="Import Product From eBay Popup" />

***Import Fields-***

- **End Date From** – Specifies the earliest (oldest) date to use in a date range filter based on item end time. Each of the time ranges must be a value less than 120 days.
- **End Date To** – Specifies the latest (most recent) date to use in a date range filter based on item end time. Must be specified if End Date From is specified.
- **SKUs (comma separated)** – Optional: enter one or more eBay SKUs separated by commas (e.g. `24-WB04,24-WB06`) to import only those listings. If left blank, products are imported using current pagination logic (all products).
- **Import Only eBay Active Products** – When checked, only actively listed eBay products are imported.

Hence, click the **Import Product From eBay** button as visible in the screenshot above.

[!\[image\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/Mapped-Products-List-eBay-Magento-Connect-Magento-Admin.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/Mapped-Products-List-eBay-Magento-Connect-Magento-Admin.png)

When the admin will click on “Import Product from eBay”, the product data will be created and stored in Magento 2 database.

[!\[image\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/ebay-1.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/ebay-1.png)

#### Bulk Migrate Listing

From the **Sync From eBay** dropdown, select **Migrate Listing By ID** to migrate specific eBay listings into the Inventory API using their listing IDs.

<img src="/images/ProductImportUpdatedFeature/BulkMigrateListing.png" alt="Bulk Migrate Listing" />

***Fields-***

- **Listing ID(s)** – Enter one listing ID or up to 5 comma-separated listing IDs per request.
- **Migrate** – Submits the bulk migration request to eBay via the Sell Inventory API. A confirmation message displays the status for each listing ID after processing.

**Note:** Bulk migrate is useful when you need to import or migrate specific eBay listings by ID rather than using the date-range or SKU-based import in step 1.

### 2. Run eBay Product Profiler

You need to run the product profiler in order to create product entry in the Magento 2 catalog.

Hereafter completing the product profiler process, the imported products will be visible on the storefront immediately.

<img src="/images/ProductImportUpdatedFeature/eBayProductProfiler-1.png" alt="Ebay-Connector-blog-2" />

Hence, when the admin will click on **Run eBay Product Profiler. **Henceforth the products will be created on Magento 2 store from Magento 2 Database (synchronized from eBay).

[!\[eBay Connector for Magento 2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/download-3-.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/download-3-.png)

### 3. Run eBay product Image profiler

Now you can run the product image profiler to import the product images in Magento 2.

<img src="/images/ProductImportUpdatedFeature/EbayProductImageProfiler.png" alt="Ebay-Connector-blog-6" />

Now, after running the profiler the imported product image will get displayed on the storefront. Hence the Images of the product will be created on Magento 2 store.

### 4. Export Product to eBay

Click on Export to eBay to export products from Magento 2 to ebay.

### <img src="/images/ProductImportUpdatedFeature/ExportProductToEbay.png" alt="Ebay-Connector-blog-3" />

After clicking the **Export to eBay**, the admin will see a **pop-up** window.

Here, the admin can **export all of the products** (only visible products) to eBay by keeping the ** Product SKU** field **empty.**

So, the admin can even **export a single product** by entering the **SKU of the product. **Henceforth clicking on the **Export Product To eBay** button.

***Note-*** Here visible products mean those products whose visibility is set as catalog, search; only catalog, or only search.

However, the products whose visibility is set as Not Visible Individually will not be exported.

[!\[image\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/export-product-sku-1.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/export-product-sku-1.png)After clicking the “**Export Product to eBay**“, you will see the below screen. Now, when the ** synchronization** is complete you can see the total number of products synced to eBay.

![exporting message-eBay Connector for Magento2](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/exporting-message.png)

### **Export Via Catalog Product Grid**

The admin can now export the products via the product grid in the admin panel. Thus, the admin can check the products for export.

Then in action, the admin can select **Export to eBay.**

[!\[catalog_export_product_eBay Connector for Magento2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/catalog_export_product.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/catalog_export_product.png)

When products are exported to eBay — whether from **Map Product**, the **Catalog Product Grid**, or via **Automatic Product Export** — they are added to an export queue and processed in the background. The admin does not need to wait on the page; export status can be tracked from the **Export Queue Log** and **Bulk Export Tasks** screens under **eBay Magento Connect**.

### Export Queue Log

Navigate to **eBay Magento Connect > Export Queue Log** to monitor the status of each queued product export.

<img src="/images/ExportProductRelatedImages/ExportQueueLog.png" alt="Export Queue Log" />

***Grid Columns-***

- **ID** – Unique queue log record ID.
- **Product SKU** – SKU of the product being exported.
- **Product Name** – Name of the product being exported.
- **Status** – Current export status: **Pending**, **Success**, or **Failed**.
- **eBay Item ID** – The eBay listing ID assigned after a successful export.
- **Error Message** – Error details when an export fails.
- **Attempts** – Number of times the export has been attempted.
- **Bulk Task ID** – Links the queue entry to a bulk export task when exported via the Feed API.
- **Created At / Updated At** – Timestamps for when the export was queued and last updated.

***Mass Actions-***

- **Retry Export** – Re-queues selected failed or pending exports for another attempt.
- **Delete** – Removes selected log records from the queue log.

**Note:** Products remain in **Pending** status until the background cron or message queue consumer processes them. Once complete, the status updates to **Success** with the eBay Item ID, or **Failed** with an error message.

### Bulk Export Tasks

When **Use Bulk Feed API** is enabled under **Automatic Product Export To eBay**, products are exported in batches via the eBay Sell Feed API (`LMS_ADD_FIXED_PRICE_ITEM`). Navigate to **eBay Magento Connect > Bulk Export Tasks** to monitor these background batch jobs.

<img src="/images/ExportProductRelatedImages/BulkExportTask.png" alt="Bulk Export Tasks" />

***Grid Columns-***

- **ID** – Internal bulk export task ID.
- **eBay Task ID** – Task identifier returned by the eBay Feed API.
- **Feed Type** – The feed operation type (e.g. `LMS_ADD_FIXED_PRICE_ITEM` for adding fixed-price listings).
- **Status** – Batch processing status: **Created**, **Uploaded**, **In Process**, **Completed**, **Completed With Errors**, or **Failed**.
- **Total Items** – Total number of products included in the batch.
- **Success** – Number of products successfully exported in the batch.
- **Failures** – Number of products that failed during the batch export.
- **Error Message** – Error details when the batch task fails.
- **Result File** – Download link for the eBay result file once processing is complete.
- **Created At / Updated At** – Timestamps for when the batch was created and last polled.

Bulk export tasks are created automatically by the **Bulk Export Products** cron. A separate **Bulk Export Poll Results** cron polls eBay for task completion, updates individual **Export Queue Log** entries, and makes the result file available for download.

**Note:** For large catalogs, bulk export processes products in configurable batch sizes (see **Bulk Feed Batch Size** under Automatic Product Export settings). Individual product exports via the message queue appear in **Export Queue Log** without a Bulk Task ID.

### **eBay Product Information**

Please make sure you have provided all the necessary information for the exported products.

However, you will need to mention ** eBay specifications, conditions, and variations** (if any) in Magento products.

[!\[eBay-Product-Visible- eBay Connector for Magento2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/eBay-Product-Visible.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/eBay-Product-Visible.png)

**Please Note: **

- The product information like product name, images, price, description/content, and quantity can easily be Imported or Exported while product mapping on both stores.
- Also, the Magento 2 eBay connector can synchronize product images for Simple as well as Configurable products.

Hereafter exporting products to eBay, the admin can check the **eBay store category** to which the product has been assigned as per the category mapping.

For example, the admin has mapped his Magento 2 **store category**(having cameras) to eBay’s **Camera & Photo **> **Camcorders** sub-category.

Now, after the admin **exports** his product to **eBay **he can edit the imported product on eBay to check the product’s **eBay store category** according to the **mapping**.

[!\[eBay-Product-Visible-eBay Connector for Magento2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/Product-Detail-Category.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/Product-Detail-Category.png)

### Bulk Action- Assign Categories

The admin can assign the categories in bulk to the products that were imported from eBay.

Herein, the admin needs to select the product and from the ‘Action’ dropdown can select the Assign To Category option.

Thus, this option will have a collection of Magento Categories that can be assigned.

![Assign-Category_eBay Connector for Magento2](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/Assign-Category.png)

### Listing Templates

The admin can add the listing templates by navigating through ** eBay Magento Connect**-> **Listing Templates**.

![image](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/Listing-Templates-1.png)

Thus, the admin can add a template by entering the title, content of the template in **HTML** or **text**. The admin can enable or disable a template.

Here, the admin has mapped the **Magento Store Product Attributes** to the **Template variables** that are being used within the listing template.

Now, when the admin creates the listing templates these **template variables** can be used within the template to send the respective item description data.[!\[magento2 ebay connector\](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/03/webkul-magento2-ebay-connector-listing-template-title.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/03/webkul-magento2-ebay-connector-listing-template-title.png)

The admin can select product attributes and map them with the template variables so that the products can be exported to eBay with the listing template (item description).

After the products are imported you can see the template variable values on the product description and on the edit product page.[!\[eBay Connector for Magento2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/03/webkul-magento2-ebay-connector-template-description.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/03/webkul-magento2-ebay-connector-template-description.png)

On the **edit** product page at **eBay,** you can see these values under the **Item Description** section.

![image](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/Item-Description-1.png)

### Price Rule

This section will help the admin to create a price rule which will be applied to the eBay product. The admin needs to navigate through **Price Rule Tab** in eBay Magento Connect Tab.![price_rules_navigation](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/price_rules_navigation.png)

On Price Rules For the eBay page, the admin can create multiple rules by clicking on **Add Rule.** However, the admin can even **edit** the previous price rule.

[!\[image\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/download-8-.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/download-8-.png)

The price rule can be created by the admin by filling the following information-

- Product price From- Minimum price range of the products on which price rule will be applicable on eBay.
- Product price To- Maximum price range of the products on which price rule will be applicable on eBay.
- Operation Type- The admin can select the type of operation that will take place when price rule is applied that is if the price rule will follow the rule in the form of a percentage or fixed amount.
- Operation- The action that will take place when the price rule is applied, that is the price of the product will increase or decrease.
- Price- The admin can state here the amount which will be added or deducted from the product amount.
- Status– The admin can enable or disable the status of the price rule.

[!\[image\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/download-9-.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/download-9-.png)

## Application of Price Rule

**When Admin has set ‘*eBay Price Rule Applicable For*‘ Export Products-**

For instance, we have a price rule of increase in price at a fixed rate of $2 with a price range of $1-$30. On Magento end, we create a product with a price of $24 as below.

[!\[image_eBay Connector for Magento2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/download-18-.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/download-18-.png)

Then as we export this product to eBay the price will automatically be incremented to $26 as per the rule.

[!\[eBay Connector for Magento 2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/T-shirt-Polo-eBay.png)](https://webkul.com/blog/ebay-connector-for-magento2/t-shirt-polo-ebay/)

However, the same rule will act opposite if we import the same product from eBay to the Magento store.

***For example:*** If you have a product with $21 on eBay store and the price rule is set as of the increase in price at a fixed rate of $2 with a price range of $1-$30.

Now as we import the product to Magento store the price of the product at Magento end will be $19.

**When Admin has set ‘*eBay Price Rule Applicable For*‘ Import Products-**

Now the admin has the same price rule of increase in price at a fixed rate of $2 with a price range of $1-$30. The product is now on eBay at the price of $26 as given below.

[!\[image_eBay Connector for Magento2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/T-shirt-PoloXX-eBay.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/T-shirt-PoloXX-eBay.png)

Now, if the product gets imported the price of the product at the Magento store will be incremented by $2 as shown below.

[!\[image\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/White-Tops.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/White-Tops.png)

Please notify here, the same rule will act opposite if we export the same product from eBay to Magento store.

For example, if you have a product with $26 and the price rule is set as of the increase in price at a fixed rate of $2 with a price range of $1-$30.

So as we import the product to eBay the price of the product at eBay end will be $24.

### Ebay Specification & Condition

At the time of Category mapping, eBay Product Condition and Specification will be created as Product attributes in Magento 2.

And these attributes label will be followed by eBay category name from where eBay condition and specification came.

**eBay-**

**Product Conditions**

**![image](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/ebay-product-conditions.png)**

**Specifications**

This option will come for every product in the back-end while editing or adding any new product. In eBay specification, admin can see various attributes with the label.

[!\[ebay specificaitions\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/ebay-specificaitions.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/ebay-specificaitions.png)

### Map order

Before synchronizing the orders from eBay to Magento 2, make sure that all products and its categories are synchronized from the eBay store to Magento 2 store.

**1. Import Order from eBay**

The admin can import the orders from the eBay store.

![ebay-orders-import](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/09/ebay-orders-import.webp)

Here, the admin will click on “Import Order from eBay” tab, an eBay Order Range page will open as per the below image.

[!\[image\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/IMPORT-ORDER.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/IMPORT-ORDER.png)

The admin will enter the date range. Proceed by clicking on **Import Order from eBay** and then orders will be imported from eBay to Magento 2 store.

So, only those orders will be imported from **eBay **to ** Magento 2 **whose status is “**Complete”** on eBay.

![maped-ebay-order-list-process](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/09/maped-ebay-order-list-process.webp)

Thus, if the eBay Product is not synced with Magento 2 store then the system will show an error.

![ebay-not-synced-products](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/09/ebay-not-synced-products.webp)

**2. Run eBay Order Profiler**

[!\[Run eBay Order profiler\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/Map-eBay-Order.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/Map-eBay-Order.png)

Now, the admin will click on **Run eBay Order Profiler** and orders from eBay will be imported and admin can see how much orders are imported and how many orders are left.

![importing-orders-from-ebay](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/09/importing-orders-from-ebay.webp)

Hence the admin can get an error message if the eBay Order id is already mapped with Magento 2 Order id before running the profiler.

![ebay-already-maped-products](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/09/ebay-already-maped-products.webp)

So, post importing the orders from eBay to Magento 2 store, the grid will look as per the below image.

![products-sync-from-ebay](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/09/products-sync-from-ebay.webp)

**Note –**

- A cron is set which automatically imports the orders from the eBay store to Magento 2 store.  So, it also imports the products in the order, if they aren’t imported earlier.
- For the imported orders when the admin process the shipments in Magento, tracking information is automatically synchronized to the corresponding eBay order in real-time. However, vice versa is not possible.

### Real-Time Missed Order

So, the information about the orders is displayed which could not import in real-time due to missing address details.

![real-time-missed-orders-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/real-time-missed-orders-1.png)

### Grouped Product Export To eBay

The Grouped product created on Magento 2 store can be easily exported to eBay. So, this can be done post creation of the grouped product on Magento 2 Store.

[!\[eBay Connector for Magento 2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/download-12.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/download-12.png)

After this admin needs to go to **Map Product** option. Thus, this will open a page **Mapped Products List, **where the admin can select ** Export to eBay. **

![Ebay-Connector-blog-4](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/Ebay-Connector-blog-4.png)

Thus, this export product can be seen on the eBay account under ** Sell>All selling.**

[!\[image-eBay Connector for Magento2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/My-eBay-All-Selling.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/My-eBay-All-Selling.png)

Hence, on clicking the respective product you can find the product details on product page.

[!\[image\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/download-13-.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/download-13-.png)

### Bundle Products Export to Ebay

The bundle product created on Magento 2 store can be easily exported to eBay. Thus, this can be done post-creation of the bundle product on Magento 2 Store.

[!\[bundledproducts\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/bundledproducts.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/bundledproducts.png)After this admin needs to go to **Map Product** option, which will open a page **Mapped Products List, **where admin can select ** Export to eBay.**

![Ebay-Connector-blog-4-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/Ebay-Connector-blog-4-1.png)

So, this exported product can be seen on the eBay account under ** Sell>All selling.**

[!\[My eBay All Selling\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/My-eBay-All-Selling-1.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/My-eBay-All-Selling-1.png)So, on clicking the respective product you can find the product details on product page. Thus, the customer can select the products in the bundle to complete the bundle.

[!\[Yoga Kits eBay\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/Yoga-Kits-eBay.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/Yoga-Kits-eBay.png)

### eBay Motors Integration

The Magento 2 eBay Connector also works with **[eBay Motors](https://www.ebay.com/rpp/geo-parts-accessories-motors)**. So, here we will show you how to set up eBay Motors integration with Magento 2.

Hereafter the successful connection, you will be able to synchronize products, categories. and orders from eBay to Magento 2 store.

[!\[ebay motors homepage-eBay Connector for Magento2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/04/ebay-motors-homepage.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/04/ebay-motors-homepage.png)

### Steps-

### 1 – Module Configuration

Hence first, you need to go to **Stores> Configuration> Webkul> eBay Magento Connect** and select the **eBay Motors** option in **Global Sites**.

[!\[select ebay motors options_eBay Connector for Magento2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/select-ebay-motors-options.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/select-ebay-motors-options.png)

### 2 – Import eBay Motors Categories

Hereafter, you need to import all the category information from eBay Motors to the Magento 2 store.

So, to do that go to the **Import eBay Categories** section and click the button.

[!\[import categories\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/import-categories.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/import-categories.png)

Thus, a success message will appear after importing all the eBay categories.

[!\[categories import message_eBay Connector for Magento2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/categories-import-message.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/categories-import-message.png)

### 3 – Mapping the eBay Motors category with the store category

Now, you need to match the correct eBay Motors category with the store category one by one.

Thus, make sure you select the sub-category, you cannot map the parent category.

If mapping categories are not done correctly, products will not be synchronized properly.

So, to map a category go to **eBay Magento Connect>Map Category>Map New Category.**

Hence following page will open, now select the store category and match it with the eBay category. Also, select the Magento attribute set according to the products.

[!\[mapping ebay motors categories\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/mapping-ebay-motors-categories.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/mapping-ebay-motors-categories.png)

Thus, saving your mapped category information. It will get add to the mapped categories list.

[!\[image\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/download-14-.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/download-14-.png)

### 4 – Importing products from eBay Motors to Magento 2

Now to import products from eBay Motors go to **eBay Magento Connect>Map Product>Sync from eBay>Import from eBay**.

[!\[Ebay-Connector-blog-5\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/Ebay-Connector-blog-5.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/import-from-ebay-button.png)

Select the date range for importing eBay products. Can even check if import only eBay Active Products. However, post that click Import Product from the eBay button.

[!\[image-eBay Connector for Magento2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/Mapped-Products-List-eBay-Magento-Connect-Magento-Admin-1.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/Mapped-Products-List-eBay-Magento-Connect-Magento-Admin-1.png)

Thus, you will get a pop-up message showing the number of products imported. So, next, you need to go to **Sync from eBay** option and select **Run eBay Product Profiler**.

So, this option will start adding the importing products to the Magento catalog.

[!\[run import profiler\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/run-import-profiler.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/run-import-profiler.png)

Here is the sample product which got import from eBay Motors to Magento 2 store.

**eBay View**

[!\[import product on ebay\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/import-product-on-ebay-1.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/import-product-on-ebay-1.png)

**Magento 2 View**

[!\[imported product on magento 2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/imported-product-on-magento-2.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/imported-product-on-magento-2.png)

**Mapped Product List**

Herein, the admin can view all the synchronized products list. Thus, it will show both imported as well as exported products.

[!\[image\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/download-10-.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/download-10-.png)

### 5 – Exporting products from Magento 2 to eBay Motors

Now to export products go to **eBay Magento Connect> Map Product> Sync from eBay> Import from eBay. **Hence a pop-up window will appear asking for product SKU.

Thus, Enter a product SKU or leave it blank.

However, if left blank all the Magento store products will get export to eBay Motors.

[!\[image_eBay Connector for Magento2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/export-product-sku-2.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/export-product-sku-2.png)

After clicking the **Export Product to eBay** button, the export profiler will run. So, it will start listing your products on eBay.

[!\[exporting message\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/exporting-message.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/exporting-message.png)

So, here is the sample product that we have exported from Magento 2 to eBay Motors.

**Magento 2 store view**

[!\[exported product eBay Connector for Magento2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/2017-08-09_17-17-09.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/2017-08-09_17-17-09.png)

**eBay  view**

[!\[image_eBay Connector for Magento2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/exported-product-on-ebay-view.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/exported-product-on-ebay-view.png)

**Exported product’s Shipping and Payment details**

![eBay Connector for Magento2_image](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/shipping-and-payment-details.png)

So, that’s all for eBay Connector for Magento 2 (Adobe Commerce) module if you still have any issues feel free to add a ticket and let us know your views to make the module better [webkul.uvdesk.com](https://webkul.uvdesk.com/)
