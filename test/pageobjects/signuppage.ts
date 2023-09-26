



class Signup
{
     
    get loginBtn () {
        return $('~Login');
    }
get SignupBtn(){
    return $('//android.widget.TextView[@text="Sign up"]');
}
get EmailInput(){

    return $('//android.widget.EditText[@text="Email"]');
}
get PasswordInput(){
    return $('//android.widget.EditText[@text="Password"]');
}
get ConfirmpasswordInput(){
    return $('//android.widget.EditText[@text="Confirm password"]');
}
get SubmitBtn(){
    return $('~button-SIGN UP');
  //  return $('//android.view.ViewGroup[@content-desc="button-SIGN UP"]');
}
get Varifymessage(){
    return $('//android.widget.TextView[@text="You successfully signed up!"]')
}
get OkBtn(){
return $('~OK')
}
}
export default new Signup();





















