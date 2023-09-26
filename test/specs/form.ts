import FormPage from '../pageobjects/formpage.ts'

describe('Forms Should be Submited', ()=> {

it ('Fill Form With valid data', async ()=> {
      await FormPage.FormBtn.click();
      await FormPage.InputField.addValue("Computer");
      var text= FormPage.TypedText.getText();
      console.log(text);
      await FormPage.SwitchBtn.click();
      await FormPage.dropdown.click();

      // let list =await $$('//*[@resource-id="android:id/text1"]')
      // // await Promise.all(list.map(lists => list.waitforExists()));
      // const textArray=[];
      // console.log(list.length);
      //  for (const item of list){
      //  let output =await item.getText();
      //  textArray.push(text);
      //  console.log(textArray);
      // }
       await FormPage.dropdownvalue.click();
       await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Active")').click();
      // await FormPage.Button.click();
      await FormPage.OkBButton.click();

});
});