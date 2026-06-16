# Export Queue Log

Navigate to **eBay Magento Connect > Export Queue Log** to monitor the status of each queued product export.

<img src="/images/ExportProductRelatedImages/ExportQueueLog.png" alt="Export Queue Log" />

***Grid Columns-***

- **ID** – Unique queue log record ID.
- **Product SKU** – SKU of the product being exported.
- **Product Name** – Name of the product being exported.
- **Status** – Current export status: **Pending**, **Success**, or **Failed**.
- **eBay Item ID** – The eBay listing ID assigned after a successful export.
- **Error Message** – Error details when an export fails.
- **Attempts** – Number of times the export has been attempted.
- **Bulk Task ID** – Links the queue entry to a bulk export task when exported via the Feed API.
- **Created At / Updated At** – Timestamps for when the export was queued and last updated.

***Mass Actions-***

- **Retry Export** – Re-queues selected failed or pending exports for another attempt.
- **Delete** – Removes selected log records from the queue log.

**Note:** Products remain in **Pending** status until the background cron or message queue consumer processes them. Once complete, the status updates to **Success** with the eBay Item ID, or **Failed** with an error message.
