"use strict";
require('source-map-support').install();

import { Animal } from './animal';
import { Cat } from './cat';

// register the types for create2()
Animal.types['cat'] = Cat;

Animal.create2('cat').talk();
Animal.create1('cat').talk();
