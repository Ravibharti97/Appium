
class Scroll{

    get SwipeBtn(){
      return $('~Swipe');
  //  return $('//android.widget.TextView[@text="Swipe"]');
    }
    
    get SwipeText(){
        return $('//*[@text="Swipe horizontal"]');
        // return $('~Swipe-screen');
    } 
    get(){}
    }
    export default new Scroll();