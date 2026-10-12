
import {type Page, type Locator} from "@playwright/test";

class loginpage {

    page: Page;
    unfield: Locator; //Predeclaration
    pwfield: Locator;
    loginbutton: Locator;

    constructor(page:Page){
        this.page=page;
        this.unfield= page.locator("#user-name");
        this.pwfield = page.locator("#password");
        this.loginbutton = page.locator("#login-button");
    }

    async usernamearea(username:string) {
        await this.unfield.fill(username);
    }

    async passwordarea(password:string){
        await this.pwfield.fill(password);
    }

    async loginarea(){
        await this.loginbutton.click();
    }

};

export default loginpage








//Note: As said by Madam, the difference of .ts file with .js file are Follow the TS formats, 
//For eg:- unfield: Locator; ,  constructor(page: Page) {.... , async enterUsername(username:
//string){ ..... } These are the changes in .ts file when compared with .js file.
