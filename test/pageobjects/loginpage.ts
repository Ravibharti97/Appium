

class LoginPage  {
   
    get loginBtn () {
        return $('~Login');
    }

     get inputEmail () {
        return $('~input-email');
    }

     get inputPassword () {
        return $('~input-password');
    }

     get btnSubmit () {
        return $('//android.widget.TextView[@text ="LOGIN"]');
    }

}
export default new LoginPage();
