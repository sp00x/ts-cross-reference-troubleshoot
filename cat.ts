/// <reference path="animal.ts" />
// ..or can we put a <reference/> here?

import { Animal } from './animal';

export class Cat extends Animal   //  TypeError: Class extends value undefined is not a constructor or null
{
    talk() { console.log("meow") };
}

// can't do this here
// Animal.types['cat'] = Cat;
