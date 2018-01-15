import {Console} from "@components/console";
import {Color} from "@components/color";

let consoleElement = document.querySelector('.console');
let console = new Console(consoleElement);

console.log('Hello World!');
console.log('Please wait 3 seconds!');
console.log('3...');
console.delayLog(1000, '2...');
console.delayLog(2000, '1...');
console.delayLog(3000, 'This delayed message was brought to you by: ', Color.red('Me!'));
