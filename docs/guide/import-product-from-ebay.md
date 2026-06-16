# 1. Import Product from eBay

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
