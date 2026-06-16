# Bulk Export Tasks

When **Use Bulk Feed API** is enabled under **Automatic Product Export To eBay**, products are exported in batches via the eBay Sell Feed API (`LMS_ADD_FIXED_PRICE_ITEM`). Navigate to **eBay Magento Connect > Bulk Export Tasks** to monitor these background batch jobs.

<img src="/images/ExportProductRelatedImages/BulkExportTask.png" alt="Bulk Export Tasks" />

***Grid Columns-***

- **ID** – Internal bulk export task ID.
- **eBay Task ID** – Task identifier returned by the eBay Feed API.
- **Feed Type** – The feed operation type (e.g. `LMS_ADD_FIXED_PRICE_ITEM` for adding fixed-price listings).
- **Status** – Batch processing status: **Created**, **Uploaded**, **In Process**, **Completed**, **Completed With Errors**, or **Failed**.
- **Total Items** – Total number of products included in the batch.
- **Success** – Number of products successfully exported in the batch.
- **Failures** – Number of products that failed during the batch export.
- **Error Message** – Error details when the batch task fails.
- **Result File** – Download link for the eBay result file once processing is complete.
- **Created At / Updated At** – Timestamps for when the batch was created and last polled.

Bulk export tasks are created automatically by the **Bulk Export Products** cron. A separate **Bulk Export Poll Results** cron polls eBay for task completion, updates individual **Export Queue Log** entries, and makes the result file available for download.

**Note:** For large catalogs, bulk export processes products in configurable batch sizes (see **Bulk Feed Batch Size** under Automatic Product Export settings). Individual product exports via the message queue appear in **Export Queue Log** without a Bulk Task ID.
