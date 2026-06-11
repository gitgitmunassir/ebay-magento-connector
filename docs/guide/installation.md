# Installation

## Requirements

- Magento 2.4.x with `Magento_Eav` and `Magento_Catalog` modules
- PHP compatible with Magento 2.4
- `webkul/ebayconnector` package (supplies the `Ebay` namespace / API client)
- Node.js 20.9.0+ (for this documentation site only)

## Install the extension

1. Place the module in `app/code/Webkul/Ebaymagentoconnect`
2. Enable the module:

```bash
bin/magento module:enable Webkul_Ebaymagentoconnect
bin/magento setup:upgrade
bin/magento setup:di:compile
bin/magento cache:flush
```

3. Configure eBay credentials under **Stores → Configuration → Webkul → eBay Magento Connect**

## eBay application setup

You will need from the eBay Developer Program:

- Application ID (App ID)
- Cert ID
- Dev ID
- RuName (for OAuth redirect)
- User tokens (obtained via OAuth callback)

The OAuth callback URL pattern:

```
https://<your-store-domain>/ebaymagentoconnect/index/fetchtoken
```

## Verify installation

After setup, confirm these admin menu items appear:

- Map Category
- Map Product
- Map eBay Order
- Real Time Missed Orders
- Export Queue Log
- Bulk Export Tasks
- Listing Templates
- Price Rules
- Configuration
