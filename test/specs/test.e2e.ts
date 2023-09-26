import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/loginpage.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        
        const loginBtn =await $('~Login');
        // const emailInput = $('//android.widget.EditText[@content-desc="input-email"]');
        // const passwordInput = $('//android.widget.EditText[@content-desc="input-password"]');
        const emailInput = await $('~input-email');
        const passwordInput = await $('~input-password');
        const submitBtn= await $('//android.widget.TextView[@text ="LOGIN"]');
        const okBtn= await $('//*[@text="OK"]');



        loginBtn.click();
        await driver.pause(3000);
        emailInput.addValue("admin@email.com");
        await driver.pause(3000);
        passwordInput.addValue("password");
        submitBtn.click();
        await driver.pause(3000);
        okBtn.click();
    })
})
describe('Form Should be Submit', () =>{
    it('Fillup the Form With Valid data', async ()=> {

    const formsBtn= await $('~Forms');
   // const inputfield = await $('~text-input');
     const inputfield = await $('//android.widget.EditText[@text="Type something"]');
  //   const inputfield = await $('//android.widget.EditText[@content-desc="text-input"]');
    const typedresult = await $('//android.widget.TextView[@content-desc="input-text-result"]');
    const switchBtn = await $('//*[@text="OFF"]');
  const dropdown = await $('//android.widget.EditText[@text="Select an item..."]');
  const dropdownvalue = await $('//*[@text="Appium is awesome"]');
  const button = await $('//android.widget.TextView[@text="Active"]');
  const buttonOkbtn = await $('//*[@resource-id="android:id/button1"]');
  const verifytext= await $('//android.widget.TextView[@text="Click to turn the switch OFF"]')


    formsBtn.click();
    await driver.pause(2000);
   // inputfield.click();
    inputfield.addValue("Computer");
    await driver.pause(2000);
  const val= typedresult.getText();
    console.log(val+'You haved typed input');
  //  await driver.pause(2000);
// await expect(typedresult).toHaveValueContaining('Computer');
    await driver.pause(2000);
    switchBtn.click();
    await driver.pause(3000);
    var verify= verifytext.getText();
    console.log(verify);
    await driver.pause(5000);
    dropdown.click();
    await driver.pause(5000);
    dropdownvalue.click();
    await driver.pause(2000);
    button.click();
    await driver.pause(2000);
    });

    });

    describe('Swipe function should be work', () => {
      
        it.only('Horizontal scrolling', async ()=> {
            
          const swipeBtn = await $('~Swipe');
          const scroll =   driver.$('//*[@class="android.view.ViewGroup"]');
          swipeBtn.click();
          await driver.pause(5000);
          await driver.touchPerform([
              {action: 'press', scroll},
              {action: 'moveTo', options: {x:100, y:1000},
            },
       //     'release',
  
          ]);
          await driver.deleteSession();
          // const scrollstart = { x:5, y:50};
          // const scrollend = {x:5, y:50};
          
          await driver.scroll();
        
         // await $('android=new UIScrollable(new UISelector().scrollable(true).scrollToForword())');




            
        });
    });


    

        // const loginBtn = $('~Login');
        // const emailInput = $('//android.widget.EditText[@content-desc="input-email"]');
        // const passwordInput = $('//android.widget.EditText[@content-desc="input-password"]');
        // const submitBtn = $('//android.widget.TextView[@text="LOGIN"]');

        // await loginBtn.click();
        // await emailInput.addValue("admin@email.com");
        // await passwordInput.addValue("password");
        // await submitBtn.click();
        // await driver.pause(5000);

        // // await expect(driver.getAlertText).toExist();

        // console.log('Alert Text--> ', await driver.getAlertText());

        

        // await LoginPage.open()

 

        // await LoginPage.login('tomsmith', 'SuperSecretPassword!')

        // await expect(SecurePage.flashAlert).toBeExisting()

        // await expect(SecurePage.flashAlert).toHaveTextContaining(

        //     'You logged into a secure area!')

        //Scroll Actions

        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

 

        // await $('Selector').click();

        // await driver.pause(5000);

        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("COMPATIBLE")').click();

        // await driver.pause(5000);
   

