// ES6 Module = an external file that contain reusable code that can be import
//              into other JavaScript file can contain Varaible, classes, function and more...
//              Introduce as part of ECMAScript2015 update.

import { pi, getVolumn, getArea, getCircumferences } from './MathUtil.js';

console.log(pi);

const Circumferences = getCircumferences(10);
const Volumn = getVolumn(2);
const Area = getArea(9);

console.log(`${Circumferences.toFixed(2)}cm`);
console.log(`${Volumn.toFixed(2)}cm`);
console.log(`${Area.toFixed(2)}cm`);
