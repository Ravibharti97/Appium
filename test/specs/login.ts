
   import LoginPage from '../pageobjects/loginpage.ts'


describe ('Login Should be Successfully',()=> {
    it ('Login With Positive data ',async ()=> {


       await  LoginPage.loginBtn.click();
   //    await driver.pause(3000);
       await LoginPage.inputEmail.addValue("admin@email.com");
       await LoginPage.inputPassword.addValue("password");
       await LoginPage.btnSubmit.click();
     //  await driver.pause(3000);

    });

});