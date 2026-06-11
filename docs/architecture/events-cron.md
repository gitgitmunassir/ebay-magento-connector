# Events & Cron

## Global events (`etc/events.xml`)

| Event | Observer | Role |
|-------|----------|------|
| `checkout_submit_all_after` | `SalesOrderPlaceAfterObserver` | Post-order place logic |
| `sales_order_shipment_track_save_after` | `SalesOrderShipmentTrackSaveAfter` | Tracking sync to eBay |
| `catalog_product_save_after` | `CatalogProductSaveAfter` | Revise eBay listing on product save |
| `admin_system_config_changed_section_ebaymagentoconnect` | `AdminSystemConfigChangedObserver` | Config change reaction |
| `sales_quote_address_collect_totals_after` | `ChangeTaxTotal` | Tax total adjustment |
| `catalog_product_import_bunch_save_after` | `CatalogProductImportBunchSaveAfter` | Post-CSV import product mapping |

## Cron jobs (`etc/crontab.xml`)

| Job | Class | Schedule | Notes |
|-----|-------|----------|-------|
| `ebay_syn_order_cron` | `Cron::orderSyncFromEbay` | `*/59 * * * *` | Order import |
| `ebay_auto_export_products` | `AutoExportProducts::execute` | Disabled (commented) | Queue-based export |
| `ebay_bulk_export_products` | `BulkExportProducts::execute` | `*/10 * * * *` | Feed API phase 1 |
| `ebay_bulk_export_poll_results` | `BulkExportPollResults::execute` | `*/15 * * * *` | Feed API phase 2 |

## Order sync behavior

`orderSyncFromEbay()` checks `getSoldItemAction()`:

- If `inventory_management` → cron returns early (real-time path handles it)
- Otherwise → pulls orders via `GetOrders`, creates Magento orders, replays missed orders
