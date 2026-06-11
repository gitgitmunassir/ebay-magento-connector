# Configuration

System configuration lives under **Stores → Configuration → Webkul → eBay Magento Connect**.

**Section ID:** `ebaymagentoconnect`

## Key config groups

| Group | Purpose |
|-------|---------|
| `general_settings` | Enable module, license, API tokens, dev/app/cert IDs, RuName, mode, location |
| `ebay_event` | Real-time event multiselect, sold item action |
| `features_status` | Auto-revise on product save, specification import mode |
| `listing_options` | Duration, gallery, templates, price rule scope, exportable product types |
| `default_website_option` | Price range filters, out-of-stock import toggle |
| `auto_export` | Enable, max items, dry-run, bulk feed toggle, batch size |
| `order_sync` | Order import behavior and status filters |

## Important config paths

```text
ebaymagentoconnect/general_settings/*
ebaymagentoconnect/ebay_event/*
ebaymagentoconnect/features_status/*
ebaymagentoconnect/listing_options/*
ebaymagentoconnect/default_website_option/*
ebaymagentoconnect/auto_export/*
ebaymagentoconnect/order_sync/*
```

## Auto-export matrix

| `auto_export/enable` | `use_bulk_feed` | Behavior |
|----------------------|-----------------|----------|
| Off | * | No auto-export crons run |
| On | 0 | Queue-based export (if cron job enabled) |
| On | 1 | Bulk Feed API crons run every 10/15 min |

## Sensitive fields

Credentials use Magento's encrypted backend. Token exchange is handled by `Controller\Index\FetchToken` and `Helper\FetchTokenHelper`.
