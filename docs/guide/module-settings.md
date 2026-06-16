# eBay Magento Connect Configuration

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
