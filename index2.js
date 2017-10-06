"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('source-map-support').install();
const animal_1 = require("./animal");
const cat_1 = require("./cat");
animal_1.Animal.types['cat'] = cat_1.Cat;
animal_1.Animal.create2('cat').talk();
animal_1.Animal.create1('cat').talk();
//# sourceMappingURL=index2.js.map