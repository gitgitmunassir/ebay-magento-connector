# Installation Of eBay Connector for Magento 2

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
