# Message Queues

Defined in `etc/communication.xml`, `etc/queue_topology.xml`, `etc/queue_publisher.xml`, `etc/queue.xml`.

## Topics

| Topic | Sync? | Handler |
|-------|-------|---------|
| `ebayeventnotification.process` | async | `EbayEvent::processMessage` |
| `ebayeventnotification.order.process` | sync | `EbayEvent::processMessage` |
| `ebayeventnotification.proimageprocess` | sync | `EbayImage::productImageProcess` |
| `ebayproductexport.process` | async | `EbayProductExport::processExportMessage` |

## Notification flow

```
eBay platform → SOAP POST → EbayListner controller
  → Model\Notification
  → PublisherInterface → message queue
  → EbayEvent::processMessage (ItemRevised, sold events, etc.)
```

## Product export flow

```
AutoExportProducts cron
  → insert wk_ebay_export_queue_log (pending)
  → publish to ebayproductexport.process
  → EbayProductExport::processExportMessage
  → ProductExportService::exportProduct()
  → update log row (success/failed)
```

## Operations

Start consumers in production:

```bash
bin/magento queue:consumers:start ebayeventnotification.process
bin/magento queue:consumers:start ebayproductexport.process
```
