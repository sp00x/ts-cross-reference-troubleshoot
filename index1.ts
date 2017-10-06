"use strict";
require('source-map-support').install();

export abstract class Animal
{
    abstract talk(): void;

    static create(type: string): Animal
    {
        switch (type)
        {
            case "cat": return new Cat();
            default: throw new Error(":(");
        }
    }
}

export class Cat extends Animal   //  TypeError: Class extends value undefined is not a constructor or null
{
    talk() { console.log("meow") };
}

let zoo: Array<Animal> = [
    Animal.create('cat')
];

zoo.forEach(a => a.talk()); // meow
