
class loginpage {

    constructor(page) //page as parameter
    {
        this.page=page;
        this.usernamefield = page.locator("#user-name")
        this.passwordfield = page.locator("#password")
        this.loginbutton = page.locator("#login-button")
    }

    //Important notes:- 
    // 1. In future Data Driven testing-il loginpage.js-il function-nu parameter is needed. 
    // 2. constructor's locator variable name-um function parameter-um same aayal ambuiguity 
    // undavum. so change the function's parameter to userame and write username instaed of "standard_user".
    //3. .fill("") , dropdown selection case-il parameter through values pass cheyuka. [Like below 
    // code for eg: username]
    async enterUsername(username) //async function
    {
        
        await this.usernamefield.fill(username);

    }

    async enterPassword(password) {

        await this.passwordfield.fill(password);
    }

    async clickLogin(){
        await this.loginbutton.click();
    }


}

export default loginpage