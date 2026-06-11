# Admin Menu & ACL

## Menu structure

Root menu: **eBay Magento Connect** (`Webkul_Ebaymagentoconnect::ebaymanager`)

| Menu item | Purpose |
|-----------|---------|
| Map Category | Category mapping grid |
| Map Product | Product mapping and import/export |
| Map eBay Order | Order mapping grid |
| Real Time Missed Orders | Failed order import queue |
| Export Queue Log | Auto-export queue status |
| Bulk Export Tasks | Feed API bulk export tasks |
| Listing Templates | HTML listing templates |
| Price Rules | Price adjustment rules |
| Configuration | Module settings |

## ACL resources

ACL is defined in `etc/acl.xml`. Each grid and action has granular permissions:

- Import / export actions
- Mass delete
- Template save
- Export queue log view/delete
- Bulk export tasks view/delete
- Configuration access

When adding new admin pages, update **both** `menu.xml` and `acl.xml`, and use `_isAllowed()` in controllers.
