
class checkoutpage {

    constructor(page){
        this.page=page;
        this.checkoutclick = page.locator("#checkout");
        this.checkoutfield_firstname = page.locator("#first-name");
        this.checkoutfield_lastname = page.locator("#last-name");
        this.checkoutfield_postal = page.locator("#postal-code");
        this.continueclick = page.locator("#continue");

    }

    async checkclick(){
        await this.checkoutclick.click();
    }

    async checkfillfname(fname){
        await this.checkoutfield_firstname.fill(fname);
    }

    async checkfilllname(lname){
        await this.checkoutfield_lastname.fill(lname);
    }

    async checkfillpost(pcode){
        await this.checkoutfield_postal.fill(pcode);
    }

    async cclick(){
        await this.continueclick.click();
    }

}

export default checkoutpage