import Scroll from '../pageobjects/Scrollpage.js';


describe('Horizontical scroll Successfullty', ()=>{

it ('User Should be able to scroll', async ()=>{
await driver.pause(3000);
await Scroll.SwipeBtn.click();
driver.saveScreenshot("./test/specs/screenshots/scroll.png");
driver.pause(5000);
await Scroll.SwipeText.click();
//await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("COMPATIBLE")').click();
// await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
//await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollToEnd(5)');
//await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
//console.log(value);

//await Scroll.SwipeText.click();
// await driver.touchAction([

// {action : 'press', x:50,y:400},
// {action : 'moveTo', x:80, y:50},
// 'release',


// ]);
//this is use for find the height and width of the device
const screenwidth= (await driver.getWindowRect()).width;
const screenheight= (await driver.getWindowRect()).height;

// //it will print the heigt and width of the screen 
console.log(screenheight);
console.log(screenwidth);
// // await driver.scroll(0, 200);


const anchorper = 50;
const startper= 90;
const endper= 10;

// //it is use to calculate the startpoint and endpoint 
const anchor = anchorper * screenwidth /100;
const startpoint = startper*screenwidth/100;
const endpoint = endper * screenwidth/100 ;


//  //const width = driver.getWindowSize;
//  //console.log(width);


 console.log(startpoint);
 console.log(endpoint);
 console.log(anchor);
 for (let swipeTime =0; swipeTime> 5; swipeTime++){
await driver.touchPerform([ 
    {action :'press',options:{

    x:startpoint,
    y:anchor
    }
},
    {
    action:'wait',options:{ms:1000}
},
{
    action:'moveTo',options:{
    x:endpoint,
    y:anchor
}
},

{
action:'release',
options: {}

}
 
]);
 }
});
});
