import signuppage from '../pageobjects/signuppage.ts';
import Signup from '../pageobjects/signuppage.ts';

describe('Signup Successfully', ()=>{

it('User should be signup  with valid dat ', async ()=> {

    // let ur= await Signup.loginBtn.getUrl();
    // console.log(ur);
    await Signup.loginBtn.click();
   
   await Signup.SignupBtn.click();
   driver.saveScreenshot("./test/specs/screenshots/screenshot.png");
   await Signup.EmailInput.addValue("example@gmail.com");
   await Signup.PasswordInput.addValue("Exmple@123");
   await Signup.ConfirmpasswordInput.addValue("Example@123");
   await driver.pause(3000);
   await Signup.SignupBtn.waitForDisplayed({timeout:6000});
   driver.saveScreenshot("./test/specs/screenshots/screenshot.png");
   await Signup.SignupBtn.click();
   await driver.pause(5000);
   
//    let output = await Signup.Varifymessage.getText();
 // console.log(output);
 // await Signup.OkBtn.click();

});
});