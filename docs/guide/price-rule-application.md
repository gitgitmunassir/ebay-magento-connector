# Application of Price Rule

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
