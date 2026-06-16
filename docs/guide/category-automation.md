# Category Automation - eBay Connector for Magento2

The **Category Automation** feature under **eBay Magento Connect > Category Automation** lets the admin fetch real-time eBay categories and automatically create the matching Magento category hierarchy, then map selected leaf categories to eBay without manual one-by-one mapping.

<img src="/images/CategoriesUpdatedFeature/CategoryAutomation.png" alt="eBay Category Automation" />

***Search Filters Fields-***

- **eBay Parent Category** – Filter the category list by a specific eBay parent category, or choose **All Categories** to browse the full taxonomy.
- **Mode** – Choose **Create + Auto Map** to create Magento categories and map them to eBay in one step, or **Create Only** to create categories without creating the eBay mapping.
- **Attribute Set** – Select the attribute set assigned to categories created during automation (defaults to the module's configured attribute set).
- **Overwrite Existing Mapping** – When checked, replaces any existing eBay-to-Magento category mapping for the selected categories.
- **Load Real-Time eBay Categories** – Fetches the latest category list directly from the eBay API based on the selected filters.
- **Run for Selected Categories** – Executes automation for the leaf categories selected in the table below.

Use the search bar to filter by **Category ID / Name / Path**, then select one or more **leaf** categories (only leaf rows are selectable) from the grid columns **eBay Category ID**, **Name**, **Path**, and **Leaf**.

<img src="/images/CategoriesUpdatedFeature/CategoryAutomationListing.png" alt="eBay Category Automation Listing" />

After loading categories, the admin can filter by parent category (for example, **Dolls & Bears**), review the full category path for each row, and select the leaf categories to automate. Pagination and rows-per-page controls help navigate large category trees.

<img src="/images/CategoriesUpdatedFeature/CategoryAutomationMappingAndCreation.png" alt="eBay Category Automation Results" />

When automation completes, a summary popup displays the results:

- **Created** – Number of new Magento categories created from the eBay hierarchy.
- **Reused** – Number of existing Magento categories reused when the same name already exists under the parent.
- **Mapped** – Number of eBay categories successfully mapped to Magento categories.
- **Skipped** – Number of categories skipped (for example, when metadata is unavailable).
- **Conflicts** – Number of mapping conflicts encountered during the run.

**Note:** Only **leaf** eBay categories can be selected for automation, since product listings are assigned to terminal categories in the eBay taxonomy.
