"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cat_1 = require("./cat");
class Animal {
    static create1(type) {
        switch (type) {
            case "cat":
                return new cat_1.Cat();
            default:
                throw new Error(":(");
        }
    }
    static create2(type) {
        let fn = Animal.types[type];
        return fn == null ? null : new fn();
    }
}
Animal.types = {};
exports.Animal = Animal;
//# sourceMappingURL=animal.js.map