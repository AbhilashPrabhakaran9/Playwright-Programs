
class homepage {

constructor(page) {

    this.page = page;
    this.suacedropdown = page.locator(".product_sort_container");
    this.productclick = page.locator(".inventory_item_name ").nth(2);
}

async dropdownselect() {
    await this.suacedropdown.selectOption({index:2});
}

async product() {
    await this.productclick.click();
}

}

export default homepage