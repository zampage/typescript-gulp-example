import {Console} from "@components/console";
import {Color} from "@components/color";

let consoleElement = document.querySelector('.console');
let console = new Console(consoleElement);

console.log('Hello World!');
console.log('Please wait 3 seconds ...');
console.delayLog(3000, 'This delayed message was brought to you by: ', Color.red('Me!'));
