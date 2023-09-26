
import Drag from '../pageobjects/drag.ts'

describe('Puzzle should be done with valid location' ,()=>{
it('Drag and drop', async ()=> {

await Drag.drag.click();
await driver.pause(5000);
await Drag.drag1.dragAndDrop(await Drag.drop1)




});


});