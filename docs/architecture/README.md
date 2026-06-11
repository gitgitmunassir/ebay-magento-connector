# Architecture Overview

The module connects Magento catalog, orders, and inventory with eBay through multiple integration layers.

## Integration layers

| Layer | Technology | Purpose |
|-------|------------|---------|
| Trading API | SOAP via `Ebay` library | Legacy listing, order, notification flows |
| REST Inventory/Offer | `Model/Rest/Method/ApiMethods` | Product import/export, compatibility |
| Message queues | Magento MQ | Async notifications and product export |
| Cron | `etc/crontab.xml` | Scheduled order sync and auto-export |
| SOAP listener | Frontend controller | Real-time eBay platform notifications |

## Package dependency

The `Ebay\` namespace lives in `webkul/ebayconnector` — not in this module. Debug API issues in both packages.

## Routes

| Area | Front name | Purpose |
|------|------------|---------|
| Admin | `ebaymagentoconnect` | Grids, saves, mass actions, profilers |
| Storefront | `ebaymagentoconnect` | OAuth callback + SOAP notification listener |

**Notification endpoint:**

```
/ebaymagentoconnect/eventnotification/ebaylistner
```

## Core helpers

| Helper | Role |
|--------|------|
| `Helper\Data` | Central config, revise payloads, order helpers |
| `Helper/ManageRawData` | eBay item → staging data (`wholedata`) |
| `Helper/SaveProduct` | Product save during import |
| `Helper/FetchTokenHelper` | OAuth token exchange |

See the detailed sections for database schema, events, cron, and message queues.
