# Map order

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
