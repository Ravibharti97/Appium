
class FormPage 
{

get FormBtn(){
return $('~Forms');
}

get InputField(){
return $('//android.widget.EditText[@text="Type something"]');
}
get TypedText(){

    return $('//android.widget.TextView[@content-desc="input-text-result"]');
}
get SwitchBtn(){
    // return $('//*[@text="OFF"]');
    return $('~switch');
}
get dropdown (){
return $('//android.widget.EditText[@text="Select an item..."]');

}
get values(){
    return $$('//*[@resource-id="android:id/text1"]')
}
get dropdownvalue(){
return $('//*[@text="Appium is awesome"]');
}
get Button(){
    return $('//android.widget.TextView[@text="Active"]');
}
get OkBButton(){
    return $('//*[@resource-id="android:id/button1"]');
}

}
export default new FormPage();