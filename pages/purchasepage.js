
class purchasepage {

constructor(page){
    this.page=page;
    this.finishclick = page.locator("#finish");
    this.backhomeclick = page.locator("#back-to-products");
}

async finishbutton(){
    await this.finishclick.click();
}

async bhomebutton(){
    await this.backhomeclick.click();
}

}

export default purchasepage