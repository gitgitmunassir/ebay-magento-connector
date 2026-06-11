# Introduction

**eBay Magento Connect** (`Webkul_Ebaymagentoconnect`) is a Magento 2 extension that connects your Magento catalog, orders, and inventory with eBay.

## What it does

- **Product import/export** — Sync listings between eBay and Magento using REST Inventory/Offer APIs and legacy Trading API flows.
- **Order sync** — Import eBay orders into Magento via cron and real-time SOAP notifications.
- **Category mapping** — Map Magento categories to eBay categories with item specifics support.
- **Auto-export** — Queue-based and bulk Feed API export paths for automated listing.
- **Real-time notifications** — eBay platform events delivered via SOAP endpoint and message queues.

## Module info

| Property | Value |
|----------|-------|
| Module path | `app/code/Webkul/Ebaymagentoconnect` |
| Composer name | `webkul/module-ebaymagentoconnect` |
| Version | 4.0.7 |
| PHP dependency | `webkul/ebayconnector` 1.0.* |

## Next steps

- [Installation](./installation.md) — Requirements and setup
- [Configuration](./configuration.md) — System config overview
- [Admin Menu](./admin-menu.md) — Backend navigation and ACL
- [Import & Export](./import-export.md) — Product sync workflows
