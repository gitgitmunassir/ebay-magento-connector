# Import & Export

## Product import flow

```
Admin: Products/Import
  → REST getInventoryItems + offer lookup
  → ManageRawData::manageProductRawData
  → wk_ebay_tempebay (staging)
  → Products/Createproduct
  → CSV → Model\Product\Import (native Magento import)
  → CatalogProductImportBunchSaveAfter observer
  → wk_ebaysynchronize_product (product map)
```

## Product export flow

```
Admin: Products/MassExport or CreateProductOneBay
  → ProductExportService::exportProduct()
  → eBay Trading/REST APIs
  → wk_ebaysynchronize_product updated
```

## Auto-export (cron)

Two paths:

1. **Queue-based** — `AutoExportProducts` cron publishes to `ebayproductexport.process` topic
2. **Bulk Feed API** — `BulkExportProducts` + `BulkExportPollResults` crons

Export queue log table: `wk_ebay_export_queue_log`

## CSV bulk import hook

Observer `CatalogProductImportBunchSaveAfter` runs after each CSV import bunch:

- Writes `wk_ebaysynchronize_product` rows (eBay item ↔ Magento SKU)
- Handles image data when configured

## Key controllers

| Controller | Action |
|------------|--------|
| `Products/Import` | Bulk import from eBay |
| `Products/Createproduct` | Staging → CSV → native import |
| `Products/MassExport` | Mass export to eBay |
| `Products/CreateProductOneBay` | Single product export |
| `Products/ReImport` | Re-import mapped listings |
