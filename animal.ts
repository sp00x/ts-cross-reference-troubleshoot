// ..is there some <reference path="./cat.ts" /> etc we can put here..?
//  .. is it supposed to be to .d.ts or .ts ?
//  to .d.ts gives  error TS5055: Cannot write file 'cat.d.ts' because it would overwrite input file.
//  to .ts gives   animal.ts(21,28): error TS2304: Cannot find name 'Cat'.   at the ctor call below

import { Cat } from './cat';

export abstract class Animal
{
    abstract talk(): void;

    /* 
    * factory method
    * -- this bombs out with "TypeError: Class extends value undefined is not a constructor or null" for the new() statements
    */
    static create1(type: string): Animal
    {
        switch (type)
        {
            case "cat":
                return new Cat();

            default:
                throw new Error(":(");
        }
    }

    /*
    * alternate factory approach where all the classes are registered (works fine)
    */
    static types: {[type: string]: new () => Animal} = {}; // constructors
    static create2(type: string): Animal
    {
        let fn = Animal.types[type];
        return fn == null ? null : new fn();
    }
}

/*
 * for 'tsc' we can actually put he import statements HERE and this works fine, but that gives a syntax error in Visual Studio Code
 */
// import { Cat } from './cat';
// import { Dog } from './dog';