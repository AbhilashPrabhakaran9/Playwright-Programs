
class cartpage {

    constructor(page) {
        this.page=page;
        this.cartclick = page.locator(".btn.btn_primary.btn_small.btn_inventory");
        this.carticonclick = page.locator(".shopping_cart_link");
    }

    async addtocart(){
        await this.cartclick.click();
    }

    async carticon(){
        await this.carticonclick.click();
    }

}

export default cartpage