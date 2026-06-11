# API Flows

## OAuth / token acquisition

```
eBay redirects → Controller\Index\FetchToken
  → FetchTokenHelper + EncryptorInterface
  → persists tokens under ebaymagentoconnect/* config
```

## Real-time SOAP notifications

```
eBay → POST /ebaymagentoconnect/eventnotification/ebaylistner
  → SOAPServer::handle()
  → Model\Notification (__call strips Response suffix)
  → validation + queue publish
```

- CSRF disabled on this endpoint (required for external POSTs)
- Class spelled `EbayListner` (typo preserved in codebase)

## REST migration status

- Product bulk import uses REST-first (`getInventoryItems` + offer lookup)
- Variation detection via inventory `groupIds` + `inventory_item_group`
- REST methods consolidated in `Model/Rest/Method/ApiMethods.php`
- Remaining SOAP-heavy flows (orders, revise, shipment) need phased migration

## Payment & shipping

- Payment method: `ebaypayment` (config default in `etc/config.xml`)
- Carrier: `wk_ebayconnector_ship`
- Custom shipping can fetch rates from product-level eBay shipping attributes

## Extension checklist

When adding features:

1. Update `menu.xml` + `acl.xml` for new admin pages
2. Add config in `system.xml` + `config.xml` with feature flags
3. Extend `ManageRawData` for import field changes
4. Update `ProductExportService` for export field changes
5. Keep `CatalogProductImportBunchSaveAfter` compatible with CSV columns
6. Run smoke tests on Map Product import and export paths
