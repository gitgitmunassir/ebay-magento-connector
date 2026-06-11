# Database Schema

Tables defined in `etc/db_schema.xml`:

| Table | Purpose |
|-------|---------|
| `wk_ebaysynchronize_product` | eBay item ↔ Magento product map |
| `wk_ebay_product_image` | Pending/linked eBay image URLs |
| `wk_ebaysynchronize_category` | Magento ↔ eBay category map |
| `wk_ebay_categories` | Cached eBay category tree |
| `wk_ebaysynchronize_order` | eBay order ↔ Magento increment_id |
| `wk_ebay_inventory_manage` | eBay listing IDs for inventory sync |
| `wk_ebay_specification` | eBay item specifics metadata |
| `wk_ebay_specification_options` | Allowed specific values |
| `wk_ebaysynchronize_category_specification` | Category-specific attribute mapping |
| `wk_ebay_tempebay` | Staging JSON for imported items |
| `wk_ebay_listing_template` | HTML listing templates |
| `wk_ebay_product_pricerule` | Price adjustment rules |
| `wk_ebay_missed_order` | Failed order imports |
| `wk_ebay_cat_field_map` | Per-category attribute ↔ eBay field map |
| `wk_ebay_bulk_export_task` | Feed API bulk export task tracking |
| `wk_ebay_export_queue_log` | Auto-export queue log |

## Service contracts

Repository interfaces in `Api/` mirror these entities:

- `ProductmapRepositoryInterface`
- `EbaycategorymapRepositoryInterface`
- `OrdermapRepositoryInterface`
- `MissedOrderRecordRepositoryInterface`
- `ListingTemplateRepositoryInterface`
- `PriceRuleRepositoryInterface`
- And more — see `Api/` directory
