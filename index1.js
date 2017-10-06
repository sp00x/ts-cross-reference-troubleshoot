"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('source-map-support').install();
class Animal {
    static create(type) {
        switch (type) {
            case "cat": return new Cat();
            default: throw new Error(":(");
        }
    }
}
exports.Animal = Animal;
class Cat extends Animal {
    talk() { console.log("meow"); }
    ;
}
exports.Cat = Cat;
let zoo = [
    Animal.create('cat')
];
zoo.forEach(a => a.talk());
//# sourceMappingURL=index1.js.map